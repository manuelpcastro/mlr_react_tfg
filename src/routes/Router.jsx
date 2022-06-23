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

      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>

      <PrivateRoutes />
    </Switch>
  </BrowserRouter>
)

export default Router
