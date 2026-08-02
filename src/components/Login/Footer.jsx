import React from "react";

const Footer = () => {
    return (
       <footer id="features" className="landing-footer">

            <div className="row g-4">

                <div className="col-lg-3 col-md-6">

                    <div className="feature-card">

                        <div className="feature-icon">
                            <i className="bi bi-fingerprint"></i>
                        </div>

                        <div className="feature-content">

                            <h5>সিঙ্গেল সাইন-অন (SSO)</h5>

                            <p>
                                একবার লগইন করে সকল সিস্টেমে
                                নিরাপদভাবে প্রবেশ করুন।
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="feature-card">

                        <div className="feature-icon">
                            <i className="bi bi-shield-check"></i>
                        </div>

                        <div className="feature-content">

                            <h5>নিরাপদ ও নির্ভরযোগ্য</h5>

                            <p>
                                আধুনিক এনক্রিপশন ও
                                Multi-Factor Authentication সমর্থিত।
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="feature-card">

                        <div className="feature-icon">
                            <i className="bi bi-people"></i>
                        </div>

                        <div className="feature-content">

                            <h5>কেন্দ্রীয় ব্যবহারকারী ব্যবস্থাপনা</h5>

                            <p>
                                এক জায়গা থেকে Role,
                                Permission ও User নিয়ন্ত্রণ।
                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-lg-3 col-md-6">

                    <div className="feature-card">

                        <div className="feature-icon">
                            <i className="bi bi-puzzle"></i>
                        </div>

                        <div className="feature-content">

                            <h5>সহজ ইন্টিগ্রেশন</h5>

                            <p>
                                OAuth2, SAML,
                                OpenID Connect API Support।
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <span>
                    © 2026 EduCore. All Rights Reserved.
                </span>

                <span className="divider"></span>

                <span>
                    Proudly Made in Bangladesh 🇧🇩
                </span>

            </div>

        </footer>
    );
};

export default Footer;