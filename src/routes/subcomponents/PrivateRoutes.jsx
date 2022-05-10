import React from "react"
import { Switch, Redirect } from "react-router-dom"
import ProtectedRoute from "../ProtectedRoute"
import useSectionsRoutes from "../hooks/useSectionsRoutes"

const PrivateRoutes = () => {
  const routes = useSectionsRoutes()

  const mappedRoutes = routes.map(section => (
    <ProtectedRoute path={section.path}>
      <section.component />
    </ProtectedRoute>
  ))

  return (
    <Switch>
      {mappedRoutes}

      {/* Default route */}
      <ProtectedRoute path="*">
        <Redirect to="/dashboard" />
      </ProtectedRoute>
    </Switch>
  )
}

export default PrivateRoutes
