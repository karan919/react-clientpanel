import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import AppNavbar from "./components/layout/AppNavbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
