import { createApi } from "@reduxjs/toolkit/query/react"
import { authenticatedBaseQuery } from ".."
import { MODELS_TAG } from "../models/constants"
import { PROJECTS_API, PROJECTS_RESULTS_TAG, PROJECTS_TAG } from "./constants"

const TAG_TYPE = { type: PROJECTS_TAG }

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: authenticatedBaseQuery,
  tagTypes: [TAG_TYPE.type],
  endpoints: builder => ({

    getProjects: builder.query({
      query: () => ({
        url: PROJECTS_API,
        method: "GET",
      }),
      providesTags: result => (result // successful query
        ? [...result.map(({ id }) => ({ ...TAG_TYPE, id })), { ...TAG_TYPE, id: "LIST" }]
        : [{ ...TAG_TYPE, id: "LIST" }]),
    }),

    createProject: builder.mutation({
      query: data => ({
        url: PROJECTS_API,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ ...TAG_TYPE, id: "LIST" }],
    }),

    getProject: builder.query({
      query: id => ({
        url: `${PROJECTS_API}/${id}`,
        method: "GET",
      }),
      providesTags: result => [{ ...TAG_TYPE, id: result?.id }],
    }),

    updateProject: builder.mutation({
      query: data => ({
        url: `${PROJECTS_API}/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ ...TAG_TYPE, id }],
    }),

    deleteProject: builder.mutation({
      query: id => ({
        url: `${PROJECTS_API}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ ...TAG_TYPE, id }],
    }),

    runProject: builder.mutation({
      query: ({ projectId, body }) => ({
        url: `${PROJECTS_API}/${projectId}/run`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _error, params) => [
        { type: PROJECTS_RESULTS_TAG, id: params?.projectId },
        { type: MODELS_TAG, id: "LIST" },
        params.body.models.map(modelId => ({ type: MODELS_TAG, id: modelId })),
      ],
    }),

    getProjectResults: builder.query({
      query: projectId => ({
        url: `${PROJECTS_API}/${projectId}/results`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: PROJECTS_RESULTS_TAG, id }],
    }),

    deleteProjectResult: builder.mutation({
      query: ({ resultId }) => ({
        url: `results/${resultId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { projectId: id }) => [{ type: PROJECTS_RESULTS_TAG, id }],
    }),
  }),
})

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useRunProjectMutation,
  useGetProjectResultsQuery,
  useDeleteProjectResultMutation,
} = projectApi
