import React from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
    return (
        <div className="container-fluid py-4">

            <div className="row g-4">

                {/* ================= LEFT ================= */}

                <div className="col-lg-9">

                    <div className="form-card">

                        {/*================ Header ================*/}

                        <div className="section-title">

                            <div className="title-icon">
                                <i className="bi bi-person"></i>
                            </div>

                            <h5>ব্যক্তিগত তথ্য</h5>

                        </div>

                        <hr />

                        <div className="row g-4">

                            {/* বাংলা নাম */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    নাম (বাংলায়)
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-person"></i>
                                    </span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="জিসান আহমেদ"
                                    />

                                </div>

                            </div>

                            {/* ইংরেজি */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    নাম (ইংরেজিতে)
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-person"></i>
                                    </span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Jisan Ahmed"
                                    />

                                </div>

                            </div>

                            {/* Employee */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    কর্মচারী আইডি
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-upc"></i>
                                    </span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="EMP-000123"
                                    />

                                </div>

                            </div>

                            {/* Email */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    ইমেইল
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-envelope"></i>
                                    </span>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="jisan@email.com"
                                    />

                                </div>

                            </div>

                            {/* Mobile */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    মোবাইল নম্বর
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-telephone"></i>
                                    </span>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="+88017XXXXXXXX"
                                    />

                                </div>

                            </div>

                            {/* DOB */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    জন্ম তারিখ
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-calendar"></i>
                                    </span>

                                    <input
                                        type="date"
                                        className="form-control"
                                    />

                                </div>

                            </div>

                            {/* Gender */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    লিঙ্গ
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-gender-ambiguous"></i>
                                    </span>

                                    <select className="form-select">

                                        <option>পুরুষ</option>

                                        <option>মহিলা</option>

                                        <option>অন্যান্য</option>

                                    </select>

                                </div>

                            </div>

                            {/* Marital */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    বৈবাহিক অবস্থা
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-heart"></i>
                                    </span>

                                    <select className="form-select">

                                        <option>অবিবাহিত</option>

                                        <option>বিবাহিত</option>

                                    </select>

                                </div>

                            </div>

                            {/* Nationality */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    জাতীয়তা
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        🇧🇩
                                    </span>

                                    <select className="form-select">

                                        <option>বাংলাদেশী</option>

                                        <option>অন্যান্য</option>

                                    </select>

                                </div>

                            </div>

                        </div>
                                                {/*================ Job Information ================*/}

                        <div className="section-title mt-5">

                            <div className="title-icon">
                                <i className="bi bi-briefcase"></i>
                            </div>

                            <h5>চাকরির তথ্য</h5>

                        </div>

                        <hr />

                        <div className="row g-4">

                            {/* Department */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    বিভাগ
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-building"></i>
                                    </span>

                                    <select className="form-select">

                                        <option>
                                            তথ্য ও প্রযুক্তি বিভাগ
                                        </option>

                                        <option>
                                            হিসাব বিভাগ
                                        </option>

                                        <option>
                                            মানব সম্পদ
                                        </option>

                                    </select>

                                </div>

                            </div>

                            {/* Designation */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    পদবী
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-award"></i>
                                    </span>

                                    <select className="form-select">

                                        <option>
                                            সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার
                                        </option>

                                        <option>
                                            সফটওয়্যার ইঞ্জিনিয়ার
                                        </option>

                                        <option>
                                            UI Designer
                                        </option>

                                    </select>

                                </div>

                            </div>

                            {/* Employment Type */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    কর্মসংস্থানের ধরন
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-briefcase"></i>
                                    </span>

                                    <select className="form-select">

                                        <option>স্থায়ী</option>

                                        <option>চুক্তিভিত্তিক</option>

                                        <option>ইন্টার্ন</option>

                                    </select>

                                </div>

                            </div>

                            {/* Joining */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    যোগদানের তারিখ
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-calendar-check"></i>
                                    </span>

                                    <input
                                        type="date"
                                        className="form-control"
                                    />

                                </div>

                            </div>

                            {/* Salary */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    বেতন (৳)
                                    <span className="text-danger">*</span>
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-currency-dollar"></i>
                                    </span>

                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="85000"
                                    />

                                </div>

                            </div>

                            {/* Workplace */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    কর্মস্থান
                                </label>

                                <div className="input-group">

                                    <span className="input-group-text">
                                        <i className="bi bi-geo-alt"></i>
                                    </span>

                                    <select className="form-select">

                                        <option>
                                            ঢাকা (হেড অফিস)
                                        </option>

                                        <option>
                                            চট্টগ্রাম
                                        </option>

                                        <option>
                                            খুলনা
                                        </option>

                                    </select>

                                </div>

                            </div>

                            {/* Note */}

                            <div className="col-12">

                                <label className="form-label">
                                    অতিরিক্ত তথ্য / নোট
                                </label>

                                <textarea
                                    rows="4"
                                    className="form-control"
                                    placeholder="প্রয়োজনীয় অতিরিক্ত তথ্য লিখুন..."
                                ></textarea>

                            </div>

                        </div>
                                            </div>
                </div>

                {/* ================= RIGHT SIDEBAR ================= */}

                <div className="col-lg-3">

                    {/* Profile Upload */}

                    <div className="form-card mb-4">

                        <div className="section-title">

                            <div className="title-icon">
                                <i className="bi bi-image"></i>
                            </div>

                            <h5>প্রোফাইল ছবি</h5>

                        </div>

                        <hr />

                        <div className="upload-box">

                            <div className="upload-avatar">

                                <i className="bi bi-person"></i>

                                <button
                                    type="button"
                                    className="upload-camera"
                                >
                                    <i className="bi bi-camera-fill"></i>
                                </button>

                            </div>

                            <h6>ছবি আপলোড করুন</h6>

                            <p>
                                JPG, PNG অথবা WEBP
                                <br />
                                (সর্বোচ্চ 2MB)
                            </p>

                            <input
                                type="file"
                                className="form-control mt-3"
                            />

                        </div>

                    </div>

                    {/* Account Status */}

                    <div className="form-card mb-4">

                        <div className="section-title">

                            <div className="title-icon">
                                <i className="bi bi-shield-check"></i>
                            </div>

                            <h5>অ্যাকাউন্ট স্ট্যাটাস</h5>

                        </div>

                        <hr />

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                                id="statusSwitch"
                            />

                            <label
                                className="form-check-label ms-2"
                                htmlFor="statusSwitch"
                            >
                                সক্রিয়
                            </label>

                        </div>

                        <small className="text-muted d-block mt-3">

                            নিষ্ক্রিয় করলে কর্মচারী
                            সিস্টেমে লগইন করতে পারবে না।

                        </small>

                    </div>

                    {/* Tips */}

                    <div className="form-card">

                        <div className="section-title">

                            <div className="title-icon">
                                <i className="bi bi-lightbulb"></i>
                            </div>

                            <h5>দ্রুত টিপস</h5>

                        </div>

                        <hr />

                        <p className="small text-muted mb-3">

                            ✔ সঠিক তথ্য প্রদান করুন।

                        </p>

                        <p className="small text-muted mb-3">

                            ✔ ইমেইল ও মোবাইল নম্বর
                            যাচাই করে সংরক্ষণ করুন।

                        </p>

                        <p className="small text-muted">

                            ✔ তথ্য সংরক্ষণের আগে
                            পুনরায় যাচাই করুন।

                        </p>

                    </div>

                </div>

            </div>

            {/* ================= ACTION BUTTON ================= */}

            <div className="row mt-4">

                <div className="col-lg-9">

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                        <button
                            type="reset"
                            className="btn btn-outline-success px-4"
                        >
                            <i className="bi bi-arrow-clockwise me-2"></i>

                            রিসেট করুন
                        </button>

                        <div className="d-flex gap-3">

                            <button
                                type="button"
                                className="btn btn-light px-4"
                            >
                                <i className="bi bi-bookmark me-2"></i>

                                ড্রাফট হিসেবে সংরক্ষণ
                            </button>

                            <button
                                type="submit"
                                className="btn btn-success px-4"
                            >
                                <i className="bi bi-send me-2"></i>

                                কর্মচারী সংরক্ষণ করুন
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default EmployeeForm;