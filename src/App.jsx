import "./App.css"

import React from "react"
import Root from "./Root"
import Router from "./routes/Router"

const App = () => (
  <div className="mlr">
    <Root>
      <Router />
    </Root>
  </div>
)

export default App
