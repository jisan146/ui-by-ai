import React from "react";
import "./Header.css";

import headerBg from "../../assets/images/header-bg.png";
import profile from "../../assets/images/avatar.png";

const Header = () => {
  return (
    <header
      className="dashboard-header"
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <div className="header-overlay"></div>

      <div className="container-fluid position-relative h-100">

        {/*================ TOP BAR ================*/}

        <div className="header-top d-flex justify-content-between align-items-start">

          {/* Left */}

          <button className="menu-btn">
            <i className="bi bi-list"></i>
          </button>

          {/* Right */}

          <div className="header-actions">

            {/* Country */}

            <button className="glass-btn country-btn">

              <img
                src="https://flagcdn.com/w40/bd.png"
                alt=""
              />

              <span>বাংলাদেশ</span>

              <i className="bi bi-chevron-down"></i>

            </button>

            {/* Notification */}

            <button className="glass-icon">

              <i className="bi bi-bell"></i>

              <span className="notify-badge">
                5
              </span>

            </button>

            {/* Mail */}

            <button className="glass-icon">

              <i className="bi bi-envelope"></i>

              <span className="notify-badge">
                3
              </span>

            </button>

            {/* Theme */}

            <button className="glass-icon">
              <i className="bi bi-brightness-high"></i>
            </button>

            {/* Profile */}

            <button className="profile-card">

              <img
                src={profile}
                alt=""
              />

              <div className="profile-text">

                <h6>জিসান আহমেদ</h6>

                <small>সুপার অ্যাডমিন</small>

              </div>

              <i className="bi bi-chevron-down"></i>

            </button>

          </div>

        </div>

        {/*================ CONTENT ================*/}

        <div className="header-content">

          <div className="header-left">

            <h1>
              নতুন কর্মচারী যোগ করুন
            </h1>

            <div className="header-breadcrumb">

              <span>হোম</span>

              <span>/</span>

              <span>কর্মচারী</span>

              <span>/</span>

              <strong>নতুন কর্মচারী যোগ করুন</strong>

            </div>

          </div>

          {/* Back Button */}

          <div className="header-right">

            <button className="back-button">

              <i className="bi bi-arrow-left"></i>

              <span>
                কর্মচারী তালিকায় ফিরে যান
              </span>

            </button>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="bottom-fade"></div>

    </header>
  );
};

export default Header;