import React, { Component } from "react";
import validation from "../../utils/validation";
import validationService from "../../services/ValidationService";
import FormSubmitService from "../../services/FormSubmitService";
import axios from "axios";
class RegisterForm extends Component {

    constructor(props) {

        super(props);
      
        this.validationSchema = null;

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

            },

            errors: {},

            isValid: true

        };

    }

    //--------------------------------------------------
    // Component Did Mount
    //--------------------------------------------------
    async componentDidMount() {

        this.validationSchema =
            await validationService.getSchema(this.constructor.name);

        if (!this.validationSchema) {
            return;
        }

        const errors = validation.validateForm(

            this.state.form,
            this.validationSchema,
            "submit"

        );

        this.setState({

            errors,
            isValid: !validation.hasErrors(errors)

        }, () => {

            setTimeout(() => {

                document
                    .querySelector('input[name="fullName"]')
                    ?.focus();

            }, 50);

        });

    }

    //--------------------------------------------------
    // Handle Change
    //--------------------------------------------------

    handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        const fieldValue =
            type === "checkbox"
                ? checked
                : value;

        const form = {

            ...this.state.form,

            [name]: fieldValue

        };

        let errors = {

            ...this.state.errors

        };

        if (this.validationSchema) {

            const error = validation.validateField(

                name,

                fieldValue,

                form,

                this.validationSchema,

                "change"

            );

            if (error) {

                errors[name] = error;

            }
            else {

                delete errors[name];

            }

        }

        this.setState({

            form,

            errors,

            isValid: !validation.hasErrors(errors)

        });

    };

    _handleSubmit = (e) => {

        e.preventDefault();

        console.log(this.state.form);

        // API Success

        this.props.setPage("otp");
        // this.props.setPage("register-success");
        // this.props.setPage("password-success");

    };
    //--------------------------------------------------
    // Handle Submit
    //--------------------------------------------------

    handleSubmit = async (e) => {

        e.preventDefault();

        if (!this.validationSchema) {

            console.error("Validation schema not loaded.");

            return;

        }

        const errors = validation.validateForm(

            this.state.form,

            this.validationSchema,

            "submit"

        );

        const isValid = !validation.hasErrors(errors);

        this.setState({

            errors,

            isValid

        });

        if (!isValid) {

            const firstError =
                validation.getFirstError(errors);

            if (firstError) {

                document
                    .getElementsByName(firstError)?.[0]
                    ?.focus();

            }

            return;

        }

        console.log(this.state.form);

       //=========================================
// API Call
//=========================================

try {

    const result = await FormSubmitService.submit(

        "/auth/register",

        this.state.form

    );

    if (!result.success) {

        this.setState({

            errors: result.errors,

            isValid: false

        });

        validation.focusFirstError(result.errors);

        return;

    }

    this.props.setPage("otp");

}
catch (error) {

    console.error(error);

}

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

                    <form onSubmit={this.handleSubmit}  >
                        {/*=====================
    Row 1
=====================*/}

                        <div className="row">

                            <div className="col-md-6 mb-4">

                                <div className="input-box">

                                    <span className="input-icon">

                                        <i className="bi bi-person"></i>

                                    </span>

                                    <input autoComplete="new-password"
                                        type="text"
                                        className="form-control"
                                        placeholder="পুরো নাম"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={this.handleChange}
                                    />

                                    {
                                        this.state.errors.fullName && (

                                            <div className="text-danger mt-1">

                                                {this.state.errors.fullName}

                                            </div>

                                        )
                                    }

                                </div>

                            </div>

                            <div className="col-md-6 mb-4">

                                <div className="input-box">

                                    <span className="input-icon">

                                        <i className="bi bi-at"></i>

                                    </span>

                                    <input autoComplete="new-password"
                                        type="text"
                                        className="form-control"
                                        placeholder="ইউজারনেম"
                                        name="username"
                                        value={form.username}
                                        onChange={this.handleChange}
                                    />

                                    {
                                        this.state.errors.username && (

                                            <div className="text-danger mt-1">

                                                {this.state.errors.username}

                                            </div>

                                        )
                                    }

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

                                    <input autoComplete="new-password"
                                        type="email"
                                        className="form-control"
                                        placeholder="ইমেইল"
                                        name="email"
                                        value={form.email}
                                        onChange={this.handleChange}
                                    />

                                    {
                                        this.state.errors.email && (

                                            <div className="text-danger mt-1">

                                                {this.state.errors.email}

                                            </div>

                                        )
                                    }

                                </div>

                            </div>

                            <div className="col-md-6 mb-4">

                                <div className="input-box">

                                    <span className="input-icon">

                                        <i className="bi bi-phone"></i>

                                    </span>

                                    <input autoComplete="new-password"
                                        type="text"
                                        className="form-control"
                                        placeholder="মোবাইল নম্বর"
                                        name="phone"
                                        value={form.phone}
                                        onChange={this.handleChange}
                                    />

                                    {
                                        this.state.errors.phone && (

                                            <div className="text-danger mt-1">

                                                {this.state.errors.phone}

                                            </div>

                                        )
                                    }

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

                                <input autoComplete="new-password"
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="পাসওয়ার্ড"
                                    name="password"
                                    value={form.password}
                                    onChange={this.handleChange}
                                />

                                {
                                    this.state.errors.password && (

                                        <div className="text-danger mt-1">

                                            {this.state.errors.password}

                                        </div>

                                    )
                                }

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

                                <input autoComplete="new-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={this.handleChange}
                                />

                                {
                                    this.state.errors.confirmPassword && (

                                        <div className="text-danger mt-1">

                                            {this.state.errors.confirmPassword}

                                        </div>

                                    )
                                }

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

                            <input autoComplete="new-password"
                                className="form-check-input"
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={form.terms}
                                onChange={this.handleChange}
                            />

                            {
                                this.state.errors.terms && (

                                    <div className="text-danger mt-2">

                                        {this.state.errors.terms}

                                    </div>

                                )
                            }

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