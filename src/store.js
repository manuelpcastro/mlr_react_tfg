import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineReducers } from "redux"
import auth from "./services/auth/slice"
import { authApi } from "./services/auth/api"
import { modelApi } from "./services/models/api"
import { projectApi } from "./services/projects/api"
import { userApi } from "./services/users/api"

const RootReducer = combineReducers({
  auth,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [projectApi.reducerPath]: projectApi.reducer,
  [modelApi.reducerPath]: modelApi.reducer,
})

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: RootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    authApi.middleware,
    userApi.middleware,
    projectApi.middleware,
    modelApi.middleware,
  ]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
