import React, { Component } from "react";
import "./assets/vendor/bootstrap/css/bootstrap.min.css" 
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <Sidebar />

        <main className="app-content">

          {/* Header এখানে বসবে */}

          <div className="container-fluid py-5">
            <h3 className="fw-bold text-dark">
              Content Area
            </h3>
          </div>

          {/* Footer এখানে বসবে */}

        </main>

      </div>
    );
  }
}

export default App;