import { useRef, useState } from "react";

const OtpForm = ({ setPage }) => {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const inputs = useRef([]);

    const handleChange = (e, index) => {

        const value = e.target.value.replace(/\D/g, "");

        if (!value) return;

        const newOtp = [...otp];

        newOtp[index] = value;

        setOtp(newOtp);

        if (index < 5) {

            inputs.current[index + 1].focus();

        }

    };

    const handleKeyDown = (e, index) => {

        if (e.key === "Backspace") {

            const newOtp = [...otp];

            if (newOtp[index] !== "") {

                newOtp[index] = "";

                setOtp(newOtp);

            } else if (index > 0) {

                inputs.current[index - 1].focus();

            }

        }

    };

const handleSubmit = (e) => {

    e.preventDefault();

    const code = otp.join("");

    console.log(code);

    // OTP Verify API Success

    setPage("reset");

};

    return (

        <>
 <div className="auth-page">
            <div className="login-card-header">

                <div>

                    <h3>

                        OTP যাচাইকরণ

                    </h3>

                    <p>

                        আপনার মোবাইল নম্বরে পাঠানো
                        ৬ সংখ্যার OTP লিখুন

                    </p>

                </div>

                <div className="shield-box">

                    <i className="bi bi-patch-check-fill"></i>

                </div>

            </div>

            <form onSubmit={handleSubmit}>

                <div className="otp-inputs">

                    {

                        otp.map((digit, index) => (

                            <input

                                key={index}

                                ref={(el) => inputs.current[index] = el}

                                type="text"

                                maxLength="1"

                                value={digit}

                                onChange={(e) => handleChange(e, index)}

                                onKeyDown={(e) => handleKeyDown(e, index)}

                                className="form-control otp-input"

                            />

                        ))

                    }

                </div>

                <div className="otp-timer">

                    <i className="bi bi-clock me-2"></i>

                    01 : 45

                </div>

                <div className="text-center mb-4">

                    <span className="text-muted">

                        কোড পাননি?

                    </span>

                    <button
                        type="button"
                        className="register-link ms-2"
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
        </>

    );

};

export default OtpForm;