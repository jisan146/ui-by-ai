import { useState } from "react";
import "./LoginModal.css";
import loginHeaderBg from "../../assets/images/login-header-bg.png";
import loginFooterBg from "../../assets/images/login-footer-bg.png";
import logo from "../../assets/images/logo.png";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
const LoginModal = ({ onLogin, onRegister }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [page, setPage] = useState("login");

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

            <div className="modal-dialog modal-dialog-centered">

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

                                        {
                                            page === "login"
                                                ? <LoginForm
                                                    setPage={setPage}
                                                    onLogin={onLogin}
                                                />
                                                : <RegisterForm
                                                    setPage={setPage}
                                                />
                                        }

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