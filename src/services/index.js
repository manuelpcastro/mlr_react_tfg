import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query"

export const BASE_URL = "http://localhost:8000/api/v1/"

const MOCK_API = "http://localhost:3004/"

export const baseQuery = fetchBaseQuery({
  baseUrl: MOCK_API,
})

export const authenticatedBaseQuery = fetchBaseQuery({
  baseUrl: MOCK_API,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth.authToken
    if (token) {
      headers.set("Authorization", `Token ${token}`)
    }
    return headers
  },
})
