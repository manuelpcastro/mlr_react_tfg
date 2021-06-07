import './App.css';

import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import requireAuth from "./utils/RequireAuth";

import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import {API_URL} from "./constants";

axios.defaults.baseURL = API_URL;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Root>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route exact path="/" component={Home} />
            <Route path="*">Ups</Route>
          </Switch>
        </Root>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
      </Fragment>
    );
  }
}

export default App;
