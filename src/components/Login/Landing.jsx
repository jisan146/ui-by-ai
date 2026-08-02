import React from "react";

import "./Landing.css";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

const Landing = () => {
    return (
        <div className="landing-page">

            <div className="container-fluid h-100">

                <div className="row g-0 landing-wrapper">

                    <div className="col-lg-5">
                        <LeftSide />
                    </div>

                    <div className="col-lg-7">
                        <RightSide />
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div
                    className="scroll-indicator"
                    onClick={() =>
                        document
                            .getElementById("features")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                >

                    <span>Scroll</span>

                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>

                    <i className="bi bi-chevron-double-down"></i>

                </div>

                <Footer />
                <LoginModal />

            </div>

        </div>
    );
};

export default Landing;