import React, { Component } from "react";
import validation from "../../utils/validation";
import validationService from "../../services/ValidationService";
import FormSubmitService from "../../services/FormSubmitService";

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.validationSchema = null;

        this.state = {
            showPassword: false,
            showConfirmPassword: false,

            form: {
                password: "",
                confirmPassword: "",
            },

            errors: {},
            isValid: true
        };
    }
    async componentDidMount() {

        const result = await validationService.getSchema(
            this.constructor.name
        );

        if (!result.success) {
            alert(result.message);
            return;
        }

        this.validationSchema = result.data;

        const errors = validation.validateForm(
            this.state.form,
            this.validationSchema,
            "submit"
        );

        this.setState({
            errors,
            isValid: !validation.hasErrors(errors)
        });

    }

    handleChange = (e) => {

        const { name, value } = e.target;

        const form = {
            ...this.state.form,
            [name]: value
        };

        let errors = {
            ...this.state.errors
        };

        if (this.validationSchema) {

            const error = validation.validateField(
                name,
                value,
                form,
                this.validationSchema,
                "change"
            );

            if (error) {
                errors[name] = error;
            } else {
                delete errors[name];
            }

        }

        this.setState({
            form,
            errors,
            isValid: !validation.hasErrors(errors)
        });

    };

    handleSubmit = async (e) => {

        e.preventDefault();

        if (!this.validationSchema) {
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

            validation.focusFirstError(errors);

            return;

        }

        try {

            const resetInfo = JSON.parse(
                sessionStorage.getItem("reset-info")
            );

            if (!resetInfo) {
                alert("Reset session expired.");
                return;
            }

            const result = await FormSubmitService.submit(
                "/reset-password",
                {
                    resetKey: resetInfo.resetKey,
                    password: this.state.form.password,
                    confirmPassword: this.state.form.confirmPassword,
                    formName: this.constructor.name
                }
            );

            if (!result.success) {

                if (result.errors) {

                    this.setState({
                        errors: result.errors,
                        isValid: false
                    });

                    validation.focusFirstError(result.errors);

                    return;

                }

                alert(result.message);

                return;

            }

            if (result.data.success) {

                sessionStorage.removeItem("reset-info");

                this.props.setPage("password-success");

            }

        } catch (error) {

            alert("Something went wrong.");

        }

    };

    render() {
        const { setPage } = this.props;
        const {
            showPassword,
            showConfirmPassword,
            form,
        } = this.state;

        return (
            <>
                <div className="auth-page">
                    <div className="login-card-header">
                        <div>
                            <h3>নতুন পাসওয়ার্ড</h3>

                            <p>আপনার নতুন পাসওয়ার্ড সেট করুন</p>
                        </div>

                        <div className="shield-box">
                            <i className="bi bi-shield-lock-fill"></i>
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        {/* Password */}

                        <div className="mb-4">
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="bi bi-lock"></i>
                                </span>

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    className="form-control"
                                    placeholder="নতুন পাসওয়ার্ড"
                                    name="password"
                                    value={form.password}
                                    onChange={this.handleChange}
                                />
                                {this.state.errors.password && (
                                    <div className="text-danger mt-1">
                                        {this.state.errors.password}
                                    </div>
                                )}
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

                        {/* Confirm Password */}

                        <div className="mb-4">
                            <div className="input-box">
                                <span className="input-icon">
                                    <i className="bi bi-shield-lock"></i>
                                </span>

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    className="form-control"
                                    placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={this.handleChange}
                                />
                                {this.state.errors.confirmPassword && (
                                    <div className="text-danger mt-1">
                                        {this.state.errors.confirmPassword}
                                    </div>
                                )}
                                <button
                                    type="button"
                                    className="password-btn"
                                    onClick={() =>
                                        this.setState({
                                            showConfirmPassword:
                                                !showConfirmPassword,
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
    }
}

export default ResetPassword;