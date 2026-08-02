import React from "react";
import logo from "../../../assets/images/logo.png";
const LeftSide = () => {
    return (
        <div className="left-side">

            {/* Logo */}

            <div className="brand">

                <img
                    src={logo}
                    alt="EduCore"
                    className="brand-logo"
                />

                <div>

                    <h2 className="brand-title">
                        Edu<span>Core</span>
                    </h2>

                    <div className="brand-subtitle">
                        Central Auth System
                    </div>

                </div>

            </div>



            {/* Heading */}

            <h1 className="hero-title">
                একটি পরিচয়,
                <br />
                সব সেবায় <span>প্রবেশাধিকার</span>
            </h1>

            {/* Description */}

            <p className="hero-text">
                EduCore Central Auth System (CAS) আপনাদের দেয় একক,
                নিরাপদ এবং স্মার্ট পরিচয় ব্যবস্থাপনা।
                একবার লগইন, সব সিস্টেমে প্রবেশাধিকার।
                আপনার প্রতিষ্ঠান হবে আরও নিরাপদ ও কার্যকর।
            </p>
            

            {/* Buttons */}

            <div className="hero-actions">

                <button className="btn btn-outline-success btn-lg hero-btn-outline">

                    <i className="bi bi-person"></i>

                    লগইন

                </button>

                <button className="btn btn-success btn-lg hero-btn">

                    <i className="bi bi-person-plus"></i>

                    রেজিস্টার

                </button>

            </div>

        </div>
    );
};

export default LeftSide;