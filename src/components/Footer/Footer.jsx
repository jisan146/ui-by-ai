import React from "react";
import "./Footer.css";

import skyline from "../../assets/images/footer-skyline.png";
// skyline image না থাকলে background CSS দিয়েও দিতে পারবে

const Footer = () => {
    return (
        <footer className="app-footer">

            {/* Skyline */}

            <div
                className="footer-skyline"
                style={{
                    backgroundImage: `url(${skyline})`,
                }}
            ></div>

            {/* Content */}

            <div className="footer-content">

                {/* Left */}

                <div className="footer-left">

                    <span>

                        © 2024 <strong>Jisan Admin</strong>.
                        সর্বস্বত্ব সংরক্ষিত।

                    </span>

                </div>

                {/* Center */}

                <div className="footer-center">

                    <img
                        src="https://flagcdn.com/w20/bd.png"
                        alt="Bangladesh"
                    />

                </div>

                {/* Right */}

                <div className="footer-right">

                    <span>

                        Made with

                        <i className="bi bi-heart-fill mx-1 text-danger"></i>

                        in Bangladesh

                    </span>

                </div>

            </div>

        </footer>
    );
};

export default Footer;