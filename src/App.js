import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import AppNavbar from "./components/layout/AppNavbar";
import AddClient from "./components/clients/AddClient";
import ClientDetail from "./components/clients/ClientDetail";
import About from "./components/layout/About";
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
                <Route exact path="/client/add" component={AddClient} />
                <Route exact path="/client/:id" component={ClientDetail} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
