import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from ".."

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: builder => ({
    getAccessToken: builder.mutation({
      query: userData => ({
        url: "token/login/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
})

export const { useGetAccessTokenMutation } = authApi
