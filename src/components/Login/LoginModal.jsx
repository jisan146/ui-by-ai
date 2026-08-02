import { useState } from "react";
import "./LoginModal.css";

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

            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">

                <div className="modal-content login-modal">

                    {/* ================= Header ================= */}

                    <div className="login-header">

                        <button
                            type="button"
                            className="btn-close modal-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>

                        <div className="header-overlay">

                            <div className="logo-circle">

                                <i className="bi bi-mortarboard-fill"></i>

                            </div>

                            <h2
                                id="loginModalLabel"
                                className="brand-title"
                            >
                                Edu<span>Core</span>
                            </h2>

                            <p className="brand-subtitle">
                                Smart. Secure. Simplified.
                            </p>

                        </div>

                    </div>

                    {/* ================= Body ================= */}

                    <div className="modal-body login-body">

                        <div className="login-card">

                            <div className="card-top">

                                <div>

                                    <h3>
                                        স্বাগতম!
                                    </h3>

                                    <p>
                                        আপনার অ্যাকাউন্টে সাইন ইন করুন
                                    </p>

                                </div>

                                <div className="shield-icon">

                                    <i className="bi bi-shield-check"></i>

                                </div>

                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* Username */}

                                <div className="form-group mb-3">

                                    <label className="form-label">

                                        ইউজারনেম বা ইমেইল

                                    </label>

                                    <div className="custom-input">

                                        <span>

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

                                <div className="form-group">

                                    <label className="form-label">

                                        পাসওয়ার্ড

                                    </label>

                                    <div className="custom-input">

                                        <span>

                                            <i className="bi bi-lock"></i>

                                        </span>

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className="form-control"
                                            placeholder="পাসওয়ার্ড"
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
                                        />

                                        <button
                                            type="button"
                                            className="eye-btn"
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

                                {/* Remember */}

                                <div className="remember-row">

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

                                    <i className="bi bi-box-arrow-in-right me-2"></i>

                                    সাইন ইন

                                </button>

                            </form>

                            {/* Divider */}

                            <div className="divider">

                                <span>অথবা</span>

                            </div>

                            {/* Social */}

                            <div className="row g-3">

                                <div className="col-md-4">

                                    <button
                                        className="btn social-btn"
                                        type="button"
                                    >

                                        <i className="bi bi-google"></i>

                                        <span>Google</span>

                                    </button>

                                </div>

                                <div className="col-md-4">

                                    <button
                                        className="btn social-btn"
                                        type="button"
                                    >

                                        <i className="bi bi-facebook"></i>

                                        <span>Facebook</span>

                                    </button>

                                </div>

                                <div className="col-md-4">

                                    <button
                                        className="btn social-btn"
                                        type="button"
                                    >

                                        <i className="bi bi-github"></i>

                                        <span>GitHub</span>

                                    </button>

                                </div>

                            </div>

                            {/* Register */}

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

                    {/* ================= Footer ================= */}

                    <div className="login-footer">

                        <div className="footer-overlay">

                            <small>

                                © 2026 EduCore Central Authentication System

                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default LoginModal;