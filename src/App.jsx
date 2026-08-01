import React, { Component } from "react";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Form from "./components/Form/EmployeeForm"

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <Sidebar />

        <main className="app-content">

    

          <Header />

           <Form/>

          {/* Footer এখানে পরে বসবে */}

        </main>

      </div>
    );
  }
}

export default App;