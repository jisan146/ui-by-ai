import { useState } from "react";
import Cookies from "js-cookie";
const LoginForm = ({ onLogin, setPage }) => {

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



    const chkLogin = (e) => {

        Cookies.set("token", { name: 'jisan' }, {
            expires: 7,
            path: "/",
        });
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("loginModal")
        );

        modal.hide();

        window.dispatchEvent(new Event("authChanged"));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (onLogin) {
            onLogin(form);
        }

    };


    return (

        <>

            {/* Header */}
            <div className="auth-page">
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

                        <button
                            type="button"
                            className="link-btn"
                            onClick={() => setPage("forgot")}
                        >

                            পাসওয়ার্ড ভুলে গেছেন?

                        </button>

                    </div>

                    {/* Login */}

                    <button

                        className="btn login-btn" onClick={chkLogin}
                    >

                        <i className="bi bi-box-arrow-in-right me-2"></i>

                        সাইন ইন

                    </button>

                </form>

                {/* Divider */}

                <div className="login-divider">

                    <span>অথবা</span>

                </div>

                {/* Social */}

                <div className="row g-3">

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

                {/* Register */}

                <div className="register-area">

                    <span>

                        অ্যাকাউন্ট নেই?

                    </span>

                    <button
                        type="button"
                        className="register-link"
                        onClick={() => setPage("register")}
                    >

                        নতুন অ্যাকাউন্ট তৈরি করুন

                    </button>

                </div>
            </div>
        </>

    );

};

export default LoginForm;