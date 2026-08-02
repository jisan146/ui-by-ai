import React, { Component } from "react";

class RegisterForm extends Component {

    constructor(props) {

        super(props);

        this.state = {

            showPassword: false,
            showConfirmPassword: false,

            form: {

                fullName: "",
                username: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                terms: false

            }

        };

    }

    handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        this.setState((prevState) => ({

            form: {

                ...prevState.form,

                [name]: type === "checkbox"
                    ? checked
                    : value

            }

        }));

    };

    handleSubmit = (e) => {

        e.preventDefault();

        console.log(this.state.form);

        // API Success

        this.props.setPage("otp");
        // this.props.setPage("register-success");
        // this.props.setPage("password-success");

    };

    render() {

        const {
            showPassword,
            showConfirmPassword,
            form
        } = this.state;

        const { setPage } = this.props;

        return (

            <>
                {/*=====================
                    Header
                =====================*/}
                <div className="auth-page">

                    <div className="login-card-header">

                        <div>

                            <h3>

                                নতুন অ্যাকাউন্ট তৈরি করুন

                            </h3>

                            <p>

                                Central Authentication System-এ যোগ দিন

                            </p>

                        </div>

                        <div className="shield-box">

                            <i className="bi bi-person-plus-fill"></i>

                        </div>

                    </div>

                    <form onSubmit={this.handleSubmit}>
                        {/*=====================
    Row 1
=====================*/}

<div className="row">

    <div className="col-md-6 mb-4">

        <div className="input-box">

            <span className="input-icon">

                <i className="bi bi-person"></i>

            </span>

            <input
                type="text"
                className="form-control"
                placeholder="পুরো নাম"
                name="fullName"
                value={form.fullName}
                onChange={this.handleChange}
            />

        </div>

    </div>

    <div className="col-md-6 mb-4">

        <div className="input-box">

            <span className="input-icon">

                <i className="bi bi-at"></i>

            </span>

            <input
                type="text"
                className="form-control"
                placeholder="ইউজারনেম"
                name="username"
                value={form.username}
                onChange={this.handleChange}
            />

        </div>

    </div>

</div>


{/*=====================
    Row 2
=====================*/}

<div className="row">

    <div className="col-md-6 mb-4">

        <div className="input-box">

            <span className="input-icon">

                <i className="bi bi-envelope"></i>

            </span>

            <input
                type="email"
                className="form-control"
                placeholder="ইমেইল"
                name="email"
                value={form.email}
                onChange={this.handleChange}
            />

        </div>

    </div>

    <div className="col-md-6 mb-4">

        <div className="input-box">

            <span className="input-icon">

                <i className="bi bi-phone"></i>

            </span>

            <input
                type="text"
                className="form-control"
                placeholder="মোবাইল নম্বর"
                name="phone"
                value={form.phone}
                onChange={this.handleChange}
            />

        </div>

    </div>

</div>


{/*=====================
    Password
=====================*/}

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
                    showPassword: !showPassword
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
{/*=====================
    Confirm Password
=====================*/}

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
            onChange={this.handleChange}
        />

        <button
            type="button"
            className="password-btn"
            onClick={() =>
                this.setState({
                    showConfirmPassword: !showConfirmPassword
                })
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


{/*=====================
    Terms
=====================*/}

<div className="form-check mb-4">

    <input
        className="form-check-input"
        type="checkbox"
        id="terms"
        name="terms"
        checked={form.terms}
        onChange={this.handleChange}
    />

    <label
        className="form-check-label"
        htmlFor="terms"
    >

        আমি <a href="#">শর্তাবলী</a> এবং{" "}
        <a href="#">গোপনীয়তা নীতি</a> মেনে নিচ্ছি

    </label>

</div>


{/*=====================
    Register Button
=====================*/}

<button
    type="submit"
    className="btn login-btn"
>

    <i className="bi bi-person-plus-fill me-2"></i>

    অ্যাকাউন্ট তৈরি করুন

</button>
                    {/*=====================
                        Divider
                    =====================*/}

                    <div className="login-divider">

                        <span>অথবা</span>

                    </div>


                    {/*=====================
                        Social Login
                    =====================*/}

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


                    {/*=====================
                        Login Link
                    =====================*/}

                    <div className="register-area">

                        <span>

                            ইতিমধ্যে অ্যাকাউন্ট আছে?

                        </span>

                        <button
                            type="button"
                            className="register-link"
                            onClick={() => setPage("login")}
                        >

                            সাইন ইন

                        </button>

                    </div>

                </form>

            </div>

        </>

        );

    }

}

export default RegisterForm;