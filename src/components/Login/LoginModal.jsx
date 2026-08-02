import { useState } from "react";
import "./LoginModal.css";
import loginHeaderBg from "../../assets/images/login-header-bg.png";
import loginFooterBg from "../../assets/images/login-footer-bg.png";
import logo from "../../assets/images/logo.png";

const LoginModal = ({ onLogin, onRegister }) => {

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        username: "",
        password: "",
        remember: true
    });

    const handleChange = (e) => {

        const { name, value, checked, type } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (onLogin) {
            onLogin(form);
        }

    };

    return (

        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
        >

            <div className="modal-dialog modal-dialog-centered modal-xl">

                <div className="modal-content login-modal">

                    <div className="login-wrapper">

                        {/*======================
                    Header
                ======================*/}

                        <div className="login-header" style={{ backgroundImage: `url(${loginHeaderBg})` }}>

                            <button
                                type="button"
                                className="btn-close modal-close"
                                data-bs-dismiss="modal"
                            ></button>

                            <div className="header-content">

                                <div className="brand-logo">

                                    <img
                                        src={logo}
                                        alt="Logo"
                                    />

                                </div>

                                <h1 className="brand-title">

                                    Edu<span>Core</span>

                                </h1>

                                <p className="brand-subtitle">

                                    Smart. Secure. Simplified.

                                </p>

                            </div>

                        </div>

                        {/*======================
                    Login Card
                ======================*/}

                        <div className="container">

                            <div className="row justify-content-center">

                                <div className="col-lg-9">

                                    <div className="login-card">

                                        <div className="login-card-header">

                                            <div>

                                                <h3>স্বাগতম!</h3>

                                                <p>
                                                    আপনার অ্যাকাউন্টে সাইন ইন করুন
                                                </p>

                                            </div>

                                            <div className="shield-box">

                                                <i className="bi bi-shield-check"></i>

                                            </div>

                                        </div>

                                        <form onSubmit={handleSubmit}>

                                            {/* Username */}

                                            <div className="mb-4">

                                                <div className="input-box">

                                                    <span className="input-icon">

                                                        <i className="bi bi-person"></i>

                                                    </span>

                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="ইউজারনেম বা ইমেইল"
                                                        name="username"
                                                        value={form.username}
                                                        onChange={handleChange}
                                                    />

                                                </div>

                                            </div>

                                            {/* Password */}

                                            <div className="mb-4">

                                                <div className="input-box">

                                                    <span className="input-icon">

                                                        <i className="bi bi-lock"></i>

                                                    </span>

                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        className="form-control"
                                                        placeholder="পাসওয়ার্ড"
                                                        name="password"
                                                        value={form.password}
                                                        onChange={handleChange}
                                                    />

                                                    <button
                                                        type="button"
                                                        className="password-btn"
                                                        onClick={() => setShowPassword(!showPassword)}
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

                                            {/* Remember */}

                                            <div className="remember-area">

                                                <div className="form-check">

                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="remember"
                                                        name="remember"
                                                        checked={form.remember}
                                                        onChange={handleChange}
                                                    />

                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="remember"
                                                    >

                                                        আমাকে মনে রাখুন

                                                    </label>

                                                </div>

                                                <a href="#">

                                                    পাসওয়ার্ড ভুলে গেছেন?

                                                </a>

                                            </div>

                                            {/* Login */}

                                            <button
                                                type="submit"
                                                className="btn login-btn"
                                            >

                                                <i className="bi bi-lock me-2"></i>

                                                সাইন ইন

                                            </button>

                                        </form>
                                        {/*==========================
    Divider
==========================*/}

                                        <div className="login-divider">

                                            <span>অথবা</span>

                                        </div>


                                        {/*==========================
    Social Login
==========================*/}

                                        <div className="row g-3 social-login">

                                            <div className="col-md-4">

                                                <button
                                                    type="button"
                                                    className="btn social-btn"
                                                >

                                                    <i className="bi bi-google google"></i>

                                                    <span>Google</span>

                                                </button>

                                            </div>

                                            <div className="col-md-4">

                                                <button
                                                    type="button"
                                                    className="btn social-btn"
                                                >

                                                    <i className="bi bi-facebook facebook"></i>

                                                    <span>Facebook</span>

                                                </button>

                                            </div>

                                            <div className="col-md-4">

                                                <button
                                                    type="button"
                                                    className="btn social-btn"
                                                >

                                                    <i className="bi bi-github github"></i>

                                                    <span>GitHub</span>

                                                </button>

                                            </div>

                                        </div>


                                        {/*==========================
    Register
==========================*/}

                                        <div className="register-area">

                                            <span>

                                                অ্যাকাউন্ট নেই?

                                            </span>

                                            <button
                                                type="button"
                                                className="register-link"
                                                onClick={onRegister}
                                                data-bs-dismiss="modal"
                                            >

                                                নতুন অ্যাকাউন্ট তৈরি করুন

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/*======================
                    Footer Illustration
                ======================*/}

                        <div className="login-footer" style={{ backgroundImage: `url(${loginFooterBg})` }}></div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default LoginModal;