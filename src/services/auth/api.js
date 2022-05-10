import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
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
