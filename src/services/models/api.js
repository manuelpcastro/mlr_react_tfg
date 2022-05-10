import { createApi } from "@reduxjs/toolkit/query/react"
import { authenticatedBaseQuery } from ".."

const TAG_TYPE = { type: "Models" }

export const modelApi = createApi({
  reducerPath: "modelApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({

    getModels: builder.query({
      query: () => ({
        url: "mlr_models/",
        method: "GET",
      }),
      providesTags: result => (result // successful query
        ? [...result.map(({ id }) => ({ ...TAG_TYPE, id })), { ...TAG_TYPE, id: "LIST" }]
        : [{ ...TAG_TYPE, id: "LIST" }]),
    }),

    createModel: builder.mutation({
      query: data => ({
        url: "mlr_models/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ ...TAG_TYPE, id: "LIST" }],
    }),

    updateModel: builder.mutation({
      query: data => ({
        url: `mlr_models/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ ...TAG_TYPE, id }],
    }),

    deleteModel: builder.mutation({
      query: id => ({
        url: `mlr_models/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [{ ...TAG_TYPE, id }],
    }),
  }),
})

export const {
  useGetModelsQuery,
  useCreateModelMutation,
  useUpdateModelMutation,
  useDeleteModelMutation,
} = modelApi
