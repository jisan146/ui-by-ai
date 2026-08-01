import React, { Component } from "react";
import "./Sidebar.css";        
import logo from "../../assets/images/logo.png"; 
import sidebarBg from "../../assets/images/sidebar-bg.png";                                                

class Sidebar extends Component {
  renderMenuItem = (icon, text, active = false) => (
    <li className={`sidebar-menu-item ${active ? "active" : ""}`}>
      <a href="#!">
        <i className={`bi ${icon}`}></i>
        <span>{text}</span>
      </a>
    </li>
  );

  render() {
    const { show } = this.props;
    return (
      <aside className={`sidebar ${show ? "show" : ""}`} style={{
                          backgroundImage: `url(${sidebarBg})`,
                      }}>
        {/* Logo */}
        <div className="sidebar-logo">
          <img
            src={logo}
            alt="Jisan Admin"
            className="sidebar-logo-img"
          />

          <div className="sidebar-logo-content">
            <h2>JISAN ADMIN</h2>
            <p>স্মার্ট প্রশাসন, উন্নত বাংলাদেশ</p>
          </div>
        </div>

        <div className="sidebar-divider"></div>

        {/* Main Menu */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">প্রধান মেনু</div>

          <ul className="sidebar-menu">
            {this.renderMenuItem("bi-house", "ড্যাশবোর্ড")}
            {this.renderMenuItem("bi-person", "কর্মচারী সমূহ", true)}
            {this.renderMenuItem("bi-grid", "বিভাগ সমূহ")}
            {this.renderMenuItem("bi-calendar-check", "উপস্থিতি")}
            {this.renderMenuItem("bi-calendar-event", "ছুটির ব্যবস্থাপনা")}
            {this.renderMenuItem("bi-currency-dollar", "পে-রোল")}
            {this.renderMenuItem("bi-bar-chart-line", "রিপোর্ট")}
            {this.renderMenuItem("bi-gear", "সেটিংস")}
          </ul>
        </div>

        <div className="sidebar-divider"></div>

        {/* Shortcut */}
        <div className="sidebar-section">
          <div className="sidebar-section-title">শর্টকাট</div>

          <ul className="sidebar-menu">
            {this.renderMenuItem("bi-person-plus", "কর্মচারী যোগ করুন")}
            {this.renderMenuItem("bi-file-earmark-text", "রিপোর্ট তৈরি করুন")}
            {this.renderMenuItem("bi-file-earmark-lock", "সিস্টেম লগ")}
            {this.renderMenuItem("bi-headset", "সাহায্য ও সাপোর্ট")}
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;