import React from "react";
import loginBg from "../../../assets/images/login-bg.png";
const RightSide = () => {
    return (
        <div className="right-side">

            <img
                src={loginBg}
                alt="Bangladesh"
                className="hero-image"
            />

            <div className="hero-overlay"></div>

            <div className="hero-left-shadow"></div>

            <div className="hero-bottom-shadow"></div>

        </div>
    );
};

export default RightSide;