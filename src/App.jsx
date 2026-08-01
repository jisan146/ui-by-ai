import React, { Component } from "react";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <Sidebar />

        <main className="app-content">

     {/* Header এখানে পরে বসবে */}

          <Header />

          <div className="container-fluid py-5">
            <h3 className="fw-bold text-dark">
              Content Area
            </h3>
          </div>

          {/* Footer এখানে পরে বসবে */}

        </main>

      </div>
    );
  }
}

export default App;