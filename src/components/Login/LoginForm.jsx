import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            error: "",
            form: {
                username: "",
                password: "",
                remember: true,
            },
        };
    }

    handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [name]: type === "checkbox" ? checked : value,
            },
        }));
    };

    handleSubmit = async () => {

        this.setState({ error: "" });

        try {

            const { form } = this.state;

            const res = await axios.post(
                "http://127.0.0.1:8000/api/login",
                {
                    login: form.username,
                    password: form.password,
                }
            );

            if (res.data.success) {

                Cookies.set(
                    "user",
                    JSON.stringify(res.data.user),
                    {
                        expires: form.remember ? 7 : 1,
                        path: "/",
                    }
                );

                const modal = bootstrap.Modal.getInstance(
                    document.getElementById("loginModal")
                );

                if (modal) {
                    modal.hide();
                }

                window.dispatchEvent(new Event("authChanged"));

                if (this.props.onLogin) {
                    this.props.onLogin(res.data.user);
                }
            }

        } catch (err) {

            this.setState({
                error:
                    err.response?.data?.message ||
                    "Login failed.",
            });

        }
    };



    render() {
        const { setPage } = this.props;
        const { form, showPassword, error } = this.state;

        return (
            <div className="auth-page">
                <div className="login-card-header">
                    <div>
                        <h3>স্বাগতম!</h3>
                        <p>আপনার অ্যাকাউন্টে সাইন ইন করুন</p>
                    </div>

                    <div className="shield-box">
                        <i className="bi bi-shield-check"></i>
                    </div>
                </div>


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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                        />

                        <button
                            type="button"
                            className="password-btn"
                            onClick={() =>
                                this.setState({
                                    showPassword: !showPassword,
                                })
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
                            onChange={this.handleChange}
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

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}
                <button
                    type="button"
                    className="btn login-btn"
                    onClick={this.handleSubmit}
                >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    সাইন ইন
                </button>


                <div className="login-divider">
                    <span>অথবা</span>
                </div>

                <div className="row g-3">
                    <div className="col-md-4">
                        <button type="button" className="btn social-btn">
                            <i className="bi bi-google google"></i>
                            <span>Google</span>
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button type="button" className="btn social-btn">
                            <i className="bi bi-facebook facebook"></i>
                            <span>Facebook</span>
                        </button>
                    </div>

                    <div className="col-md-4">
                        <button type="button" className="btn social-btn">
                            <i className="bi bi-github github"></i>
                            <span>GitHub</span>
                        </button>
                    </div>
                </div>

                <div className="register-area">
                    <span>অ্যাকাউন্ট নেই?</span>

                    <button
                        type="button"
                        className="register-link"
                        onClick={() => setPage("register")}
                    >
                        নতুন অ্যাকাউন্ট তৈরি করুন
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginForm;