import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { isEmpty } from "./utils/Utils"
import { store } from "./store"
import { updateAccessToken } from "./services/auth/slice"

const Root = ({ children }) => {
  if (!isEmpty(localStorage.getItem("token"))) {
    store.dispatch(updateAccessToken(localStorage.getItem("token")))
  }

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
