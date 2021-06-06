import './App.css';

import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

import Root from "./Root";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Route path="*">Ups</Route>
          </Switch>
        </Root>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Header />
//         <Home />
//       </Fragment>
//     );
//   }
// }

export default App;
