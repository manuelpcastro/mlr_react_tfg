import "./App.css"

import React, { Component, Fragment } from "react"
import { Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import axios from "axios"
import Home from "./components/Home"
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"

import Root from "./Root"
import { API_URL } from "./constants"
import Router from "./Router"

axios.defaults.baseURL = API_URL

class App extends Component {
  render() {
    return (
      <div className="mlr">
        <Root>
          <Router />
        </Root>
        <ToastContainer hideProgressBar newestOnTop />
      </div>
    )
  }
}

export default App
