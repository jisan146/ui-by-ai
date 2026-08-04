import React, { Component } from "react";
import axios from "axios";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            identity: "",
            loading: false,
            error: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            identity: e.target.value,
            error: "",
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({
            loading: true,
            error: "",
        });

        try {

            const result = await axios.post(
                "http://127.0.0.1:8000/api/forgot-password",
                {
                    email: this.state.identity,
                }
            );

            if (result.data.success) {

                sessionStorage.setItem(
                    "otp-info",
                    JSON.stringify({
                        type: "for-password-reset",
                        sessionKey: this.state.identity,
                    })
                );

                this.props.setPage("otp");
            }

        } catch (err) {

            this.setState({
                error:
                    err.response?.data?.message ||
                    "Something went wrong.",
            });

        } finally {

            this.setState({
                loading: false,
            });

        }
    };

    render() {
        const { setPage } = this.props;
        const { identity, loading, error } = this.state;

        return (
            <div className="auth-page">

                <div className="login-card-header">

                    <div>
                        <h3>পাসওয়ার্ড পুনরুদ্ধার</h3>

                        <p>
                            আপনার ইমেইল লিখুন
                        </p>
                    </div>

                    <div className="shield-box">
                        <i className="bi bi-key-fill"></i>
                    </div>

                </div>

                <form onSubmit={this.handleSubmit}>

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <div className="mb-4">

                        <div className="input-box">

                            <span className="input-icon">
                                <i className="bi bi-envelope-at"></i>
                            </span>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="আপনার ইমেইল লিখুন"
                                value={identity}
                                onChange={this.handleChange}
                                required
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn login-btn"
                        disabled={loading}
                    >
                        <i className="bi bi-send me-2"></i>

                        {loading ? "অপেক্ষা করুন..." : "OTP পাঠান"}

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
        );
    }
}

export default ForgotPassword;