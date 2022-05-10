import React from "react"
import {
  BrowserRouter, Switch, Route, Redirect,
} from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import PrivateRoutes from "./subcomponents/PrivateRoutes"

const Router = () => (
  <BrowserRouter>
    <Switch>

      <Route path="/login">
        <LoginPage />
      </Route>

      <PrivateRoutes />

      <Route>
        <Redirect to="/login" />
      </Route>

    </Switch>
  </BrowserRouter>
)

export default Router
