import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import UsersPage from "../pages/UsersPage"
import ProtectedRoute from "./ProtectedRoute"

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/projects">
        <ProjectsPage />
      </Route>
      <Route path="/models">
        <ModelsPage />
      </Route> */}

      <ProtectedRoute path="/users">
        <UsersPage />
      </ProtectedRoute>

      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
