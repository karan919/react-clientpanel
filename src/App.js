import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>hello</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
