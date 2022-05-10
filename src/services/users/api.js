import { createApi } from "@reduxjs/toolkit/query/react"
import { authenticatedBaseQuery } from ".."

const TAG_TYPE = { type: "User" }

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({

    getCurrentUser: builder.query({
      query: () => ({
        url: "users/me/",
        method: "GET",
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: "users/",
        method: "GET",
      }),
      providesTags: result => (result // successful query
        ? [...result.map(({ id }) => ({ ...TAG_TYPE, id })), { ...TAG_TYPE, id: "LIST" }]
        : [{ ...TAG_TYPE, id: "LIST" }]),
      // an error occurred, but we still want to refetch this query when
      // `{ type: 'Users', id: 'LIST' }` is invalidated
    }),

    createUser: builder.mutation({
      query: userData => ({
        url: "users/",
        method: "POST",
        body: userData,
      }),
      // Invalidates all User-type queries providing the `LIST` id
      invalidatesTags: [{ ...TAG_TYPE, id: "LIST" }],
    }),

    updateUser: builder.mutation({
      query: data => ({
        url: `users/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      // Invalidates all queries that subscribe to this User `id` only.
      invalidatesTags: (_result, _error, { id }) => [{ ...TAG_TYPE, id }],
    }),

    deleteUser: builder.mutation({
      query: id => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      // Invalidates all queries that subscribe to this User `id` only.
      invalidatesTags: (_result, _error, id) => [{ ...TAG_TYPE, id }],
    }),

  }),
})

export const {
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi
