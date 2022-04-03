import React from "react"
import {
  BrowserRouter, Switch, Route, Redirect,
} from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import ProtectedRoute from "./ProtectedRoute"
import useSectionsRoutes from "./hooks/useSectionsRoutes"

const Router = () => {
  const routes = useSectionsRoutes()

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        {routes.map(section => (
          <ProtectedRoute path={section.path}>
            {section.children}
          </ProtectedRoute>
        ))}

        <Route>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
