import React from "react";

const SuccessScreen = ({
    title,
    message,
    buttonText = "লগইনে যান",
    setPage
}) => {

    return (

        <div className="success-wrapper">

            <div className="success-icon">

                <i className="bi bi-check-circle-fill"></i>

            </div>

            <h2>

                {title}

            </h2>

            <p>

                {message}

            </p>

            <button
                className="btn login-btn"
                onClick={() => setPage("login")}
            >

                <i className="bi bi-box-arrow-in-right me-2"></i>

                {buttonText}

            </button>

        </div>

    );

};

export default SuccessScreen;