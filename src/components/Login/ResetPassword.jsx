import { useState } from "react";

const ResetPassword = ({ setPage }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [form, setForm] = useState({

        password: "",
        confirmPassword: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(form);

        // API Success

        //alert("Password Updated Successfully");

       setPage("password-success");

    };

    return (

        <>
            <div className="auth-page">
                <div className="login-card-header">

                    <div>

                        <h3>

                            নতুন পাসওয়ার্ড

                        </h3>

                        <p>

                            আপনার নতুন পাসওয়ার্ড সেট করুন

                        </p>

                    </div>

                    <div className="shield-box">

                        <i className="bi bi-shield-lock-fill"></i>

                    </div>

                </div>

                <form onSubmit={handleSubmit}>

                    {/* Password */}

                    <div className="mb-4">

                        <div className="input-box">

                            <span className="input-icon">

                                <i className="bi bi-lock"></i>

                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="নতুন পাসওয়ার্ড"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />

                            <button
                                type="button"
                                className="password-btn"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >

                                <i
                                    className={
                                        showPassword
                                            ? "bi bi-eye-slash"
                                            : "bi bi-eye"
                                    }
                                ></i>

                            </button>

                        </div>

                    </div>

                    {/* Confirm Password */}

                    <div className="mb-4">

                        <div className="input-box">

                            <span className="input-icon">

                                <i className="bi bi-shield-lock"></i>

                            </span>

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />

                            <button
                                type="button"
                                className="password-btn"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >

                                <i
                                    className={
                                        showConfirmPassword
                                            ? "bi bi-eye-slash"
                                            : "bi bi-eye"
                                    }
                                ></i>

                            </button>

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn login-btn"
                    >

                        <i className="bi bi-check-circle me-2"></i>

                        পাসওয়ার্ড আপডেট করুন

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

export default ResetPassword;