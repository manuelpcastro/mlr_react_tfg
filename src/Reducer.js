import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

// import new reducer
import { signupReducer } from "./components/signup/SignupReducer"
import { loginReducer } from "./components/login/LoginReducer"
import { mlrModelsReducer } from "./components/mlr_models/MlrModelReducer"
import UsersMgmtReducer from "./store/users/UsersMgmtReducer"

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  createUser: signupReducer,
  auth: loginReducer,
  mlr_models: mlrModelsReducer,
  usersReducer: UsersMgmtReducer,

})

export default createRootReducer
