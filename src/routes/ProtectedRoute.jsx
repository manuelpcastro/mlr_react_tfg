import React from "react"
import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ path, children, ...routeProps }) => {
  const { isAuthenticated } = useSelector(state => state.auth)

  const Component = isAuthenticated ? children : <Redirect to="/login" />

  return (
    <Route {...routeProps}>
      {Component}
    </Route>
  )
}

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ProtectedRoute
