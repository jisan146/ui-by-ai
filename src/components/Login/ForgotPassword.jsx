import { useState } from "react";

const ForgotPassword = ({ setPage }) => {

    const [identity, setIdentity] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(identity);

        // API Success
        setPage("otp");

    };

    return (

        <>
            <div className="auth-page">
                <div className="login-card-header">

                    <div>

                        <h3>

                            পাসওয়ার্ড পুনরুদ্ধার

                        </h3>

                        <p>

                            আপনার ইমেইল অথবা মোবাইল নম্বর লিখুন

                        </p>

                    </div>

                    <div className="shield-box">

                        <i className="bi bi-key-fill"></i>

                    </div>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">

                        <div className="input-box">

                            <span className="input-icon">

                                <i className="bi bi-envelope-at"></i>

                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="ইমেইল অথবা মোবাইল নম্বর"
                                value={identity}
                                onChange={(e) => setIdentity(e.target.value)}
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn login-btn"
                    >

                        <i className="bi bi-send me-2"></i>

                        OTP পাঠান

                    </button>

                </form>

                <div className="register-area">

                    <button
                        type="button"
                        className="register-link"
                        onClick={() => setPage("login")}
                    >

                        <i className="bi bi-arrow-left me-2"></i>

                        লগইনে ফিরে যান

                    </button>

                </div>
            </div>
        </>

    );

};

export default ForgotPassword;