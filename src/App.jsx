import React, { Component } from "react";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.js";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "./App.css";

import Landing from "./components/Login/Landing"

class App extends Component {
 
  render() {
    return (
      <Landing></Landing>
    )
  }
}

export default App;