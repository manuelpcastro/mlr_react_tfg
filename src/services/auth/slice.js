import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  authToken: null,
  currentUser: {},
}

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      state.authToken = action.payload
      localStorage.setItem("token", action.payload)
    },

    clearAccessToken: state => {
      state.authToken = ""
      localStorage.removeItem("token")
    },
  },
})

export const { updateAccessToken, clearAccessToken } = slice.actions

export default slice.reducer

export const selectIsAuthenticated = state => !!state.auth.authToken

export const selectCurrentUser = state => state.auth.currentUser
