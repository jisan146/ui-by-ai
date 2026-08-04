import React, { Component } from "react";



import "../../App.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/EmployeeForm"
import Footer from "../../components/Footer/Footer"


class MainLayout extends Component {
  state = {
    sidebarOpen: false,
    isLogin: false
  };



  toggleSidebar = () => {
    this.setState((prev) => ({
      sidebarOpen: !prev.sidebarOpen,
    }));
  };

  closeSidebar = () => {
    this.setState({
      sidebarOpen: false,
    });
  };
  render() {

    return (
      <div className="app-wrapper">

        <Sidebar show={this.state.sidebarOpen} />
        {/* Overlay */}
        {this.state.sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={this.closeSidebar}
          ></div>
        )}

        <main className="app-content">



          <Header
            toggleSidebar={this.toggleSidebar}
            sidebarOpen={this.state.sidebarOpen}
          />

          <Form />

          <Footer />
        </main>

      </div>
    );
  }
}

export default MainLayout;