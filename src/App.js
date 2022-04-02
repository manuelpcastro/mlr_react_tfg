import "./App.css"

import React, { Component } from "react"
import { ToastContainer } from "react-toastify"
import axios from "axios"
import Root from "./Root"
import { API_URL } from "./constants"
import Router from "./routes/Router"

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
