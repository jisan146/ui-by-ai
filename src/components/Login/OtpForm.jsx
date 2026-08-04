import React, { Component, createRef } from "react";
import axios from "axios";

class OtpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: ["", "", "", "", "", ""],
            timeLeft: 300, // 5 মিনিট = 300 সেকেন্ড
        };

        this.inputs = [];
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.timeLeft <= 1) {
                    clearInterval(this.timer);
                    return { timeLeft: 0 };
                }

                return {
                    timeLeft: prevState.timeLeft - 1,
                };
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
    };

    handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, "");

        if (!value) return;

        const newOtp = [...this.state.otp];
        newOtp[index] = value;

        this.setState({ otp: newOtp }, () => {
            if (index < 5 && this.inputs[index + 1]) {
                this.inputs[index + 1].focus();
            }
        });
    };

    handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...this.state.otp];

            if (newOtp[index] !== "") {
                newOtp[index] = "";

                this.setState({ otp: newOtp });
            } else if (index > 0 && this.inputs[index - 1]) {
                this.inputs[index - 1].focus();
            }
        }
    };

    _handleSubmit = (e) => {
        e.preventDefault();

        const code = this.state.otp.join("");

        console.log(code);

        // OTP Verify API Success
        this.props.setPage("reset");
    };
    handleResend = async () => {

        const otpInfo = JSON.parse(sessionStorage.getItem("otp-info"));

        try {

            const { data } = await axios.post("http://localhost:8000/api/resend-otp", {
                sessionKey: otpInfo.sessionKey,
            });

            if (data.success) {

                // Timer Reset
                this.setState({ timeLeft: 300 });

                alert("OTP sent successfully.");

            }

        } catch (error) {
           
            alert(error.response?.data?.message || "Something went wrong.");

        }
    };
    handleSubmit = async (e) => {
        e.preventDefault();

        const code = this.state.otp.join("");

        if (code.length !== 6) {
            alert("৬ সংখ্যার OTP দিন");
            return;
        }

        try {

            const otpInfo = JSON.parse(sessionStorage.getItem("otp-info"));

            const sessionKey = otpInfo?.sessionKey;

            const { data } = await axios.post("http://localhost:8000/api/verify-otp", {
                sessionKey,
                otp: code,
            });

            if (data.success) {

                localStorage.removeItem("otp-info");

                alert(data.message);

                // Registration Success
                this.props.setPage("register-success");

            }

        } catch (error) {

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Something went wrong.");
            }

        }
    };

    handlePaste = (e) => {
        e.preventDefault();

        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        const newOtp = [...this.state.otp];

        pasted.split("").forEach((digit, i) => {
            newOtp[i] = digit;
        });

        this.setState({ otp: newOtp }, () => {
            this.inputs[Math.min(pasted.length, 6) - 1]?.focus();
        });
    };

    render() {
        const { otp } = this.state;
        const { setPage } = this.props;

        return (
            <div className="auth-page">
                <div className="login-card-header">
                    <div>
                        <h3>OTP যাচাইকরণ</h3>

                        <p>
                            আপনার মোবাইল নম্বরে পাঠানো
                            <br />
                            ৬ সংখ্যার OTP লিখুন
                        </p>
                    </div>

                    <div className="shield-box">
                        <i className="bi bi-patch-check-fill"></i>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (this.inputs[index] = el)}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => this.handleChange(e, index)}
                                onKeyDown={(e) => this.handleKeyDown(e, index)}
                                className="form-control otp-input"
                                onPaste={this.handlePaste}
                            />

                        ))}
                    </div>

                    <div className="otp-timer">
                        <i className="bi bi-clock me-2"></i>
                        {this.formatTime(this.state.timeLeft)}
                    </div>

                    <div className="text-center mb-4">
                        <span className="text-muted">কোড পাননি?</span>

                        <button
                            type="button"
                            className="register-link ms-2" onClick={this.handleResend}
                        >
                            <i className="bi bi-arrow-clockwise me-1"></i>
                            পুনরায় পাঠান
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="btn login-btn"
                    >
                        <i className="bi bi-shield-check me-2"></i>
                        যাচাই করুন
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

export default OtpForm;