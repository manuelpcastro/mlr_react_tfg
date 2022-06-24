import { createApi } from "@reduxjs/toolkit/query/react"
import { authenticatedBaseQuery } from ".."

const TAG_TYPE = { type: "Projects" }

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: authenticatedBaseQuery,
  tagTypes: [TAG_TYPE.type],
  endpoints: builder => ({

    getProjects: builder.query({
      query: () => ({
        url: "mlr_projects/",
        method: "GET",
      }),
      providesTags: result => (result // successful query
        ? [...result.map(({ id }) => ({ ...TAG_TYPE, id })), { ...TAG_TYPE, id: "LIST" }]
        : [{ ...TAG_TYPE, id: "LIST" }]),
    }),

    createProject: builder.mutation({
      query: data => ({
        url: "mlr_projects/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ ...TAG_TYPE, id: "LIST" }],
    }),

    getProject: builder.query({
      query: id => ({
        url: `mlr_projects/${id}`,
        method: "GET",
      }),
      providesTags: result => [{ ...TAG_TYPE, id: result?.id }],
    }),

    updateProject: builder.mutation({
      query: data => ({
        url: `mlr_projects/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ ...TAG_TYPE, id }],
    }),

    deleteProject: builder.mutation({
      query: id => ({
        url: `mlr_projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ ...TAG_TYPE, id }],
    }),

    runProject: builder.mutation({
      query: ({ projectId, body }) => ({
        url: `mlr_projects/${projectId}/run`,
        method: "POST",
        body,
      }),
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
} = projectApi
