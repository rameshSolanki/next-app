import React, { useState } from 'react';

export const ODAForm = () => {
    const [showOtp, setShowOtp] = useState(false);
    const [formData, setFormData] = useState({
        mobile: "",
        promo: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile") {
            // Allow only digits and limit to 10 characters
            const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: digitsOnly
            }));

            // Automatically switch to OTP section once 10 digits are typed
            if (digitsOnly.length === 10) {
                setShowOtp(true);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!showOtp) {
            if (formData.mobile.length === 10) {
                setShowOtp(true);
            } else {
                alert("Please enter a valid 10-digit mobile number.");
            }
        } else {
            console.log("Form Submitted:", formData);
            alert("Verification successful!");
        }
    };

    return (
        <div className="mt-16 w-full max-w-lg mx-auto">
            {/* Decorative gradient blur background */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-35 transition duration-1000 group-hover:duration-200"></div>

                {/* Main Container Card */}
                <div className="relative bg-white/90 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                            Verification Portal
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight sm:text-3xl">
                            Unlock Exclusive Benefits
                        </h2>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                            Verify your mobile number to unlock premium stock updates.
                        </p>
                    </div>

                    {/* Form Content Wrapper */}
                    <form
                        onSubmit={handleFormSubmit}
                        className="space-y-6"
                    >

                        {/* ========================================================================= */}
                        {/* STEP 1: MOBILE NUMBER & PROMO CODE (Visible by default)                   */}
                        {/* ========================================================================= */}
                        <div className={showOtp ? 'hidden' : 'block space-y-6'}>
                            {/* Step indicator */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Step 1 of 2</span>
                                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Enter Details</span>
                            </div>

                            {/* Mobile Input Field */}
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Mobile Number
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    {/* Country Code Dropdown Placeholder */}
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <div className="flex items-center gap-1 text-slate-500 font-medium text-sm pr-2 border-r border-slate-200 cursor-pointer hover:text-indigo-600 transition">
                                            <span className="text-base leading-none">🇮🇳</span>
                                            <span>+91</span>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        placeholder="Enter 10-digit number"
                                        className="block w-full pl-24 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all text-sm font-medium"
                                    />
                                </div>
                                <p className="mt-1.5 text-xs text-slate-400">
                                    Entering 10 digits will automatically proceed to the OTP verification screen.
                                </p>
                            </div>

                            {/* Promo Code Input Field */}
                            <div>
                                <label htmlFor="promo" className="block text-sm font-semibold text-slate-700 mb-2">
                                    Promo Code <span className="text-slate-400 font-normal">(Optional)</span>
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="promo"
                                        name="promo"
                                        value={formData.promo}
                                        onChange={handleInputChange}
                                        placeholder="WELCOME2026"
                                        className="block w-full pl-10 pr-24 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 uppercase tracking-wider text-sm font-semibold transition-all"
                                    />
                                    {/* Apply action button inside the input */}
                                    <div className="absolute inset-y-1.5 right-1.5 flex items-center">
                                        <button
                                            type="button"
                                            className="h-full px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition active:scale-95"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                {/* Applied promo badge mockup */}
                                {formData.promo && (
                                    <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Promo code applied</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Button */}
                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
                            >
                                Send Verification Code
                                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>


                        {/* ========================================================================= */}
                        {/* STEP 2: OTP VERIFICATION (Hidden by default)                              */}
                        {/* ========================================================================= */}
                        <div className={showOtp ? 'block space-y-6' : 'hidden'}>
                            {/* Step indicator */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Step 2 of 2</span>
                                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full animate-pulse">
                                    Verification Pending
                                </span>
                            </div>

                            {/* OTP Input Fields Wrapper */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-semibold text-slate-700">
                                        Enter OTP Code
                                    </label>
                                    <span className="text-xs font-bold text-indigo-600">
                                        Sent to +91 ******{formData.mobile ? formData.mobile.slice(-4) : "xxxx"}
                                    </span>
                                </div>

                                {/* 6-Digit OTP Box Grid */}
                                <div className="grid grid-cols-6 gap-2 py-2">
                                    <input
                                        type="text"
                                        maxLength="1"
                                        placeholder="•"
                                        defaultValue="3"
                                        className="w-full h-12 text-center text-lg font-extrabold text-slate-800 bg-white border-2 border-indigo-500 rounded-xl focus:outline-none ring-2 ring-indigo-100 shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        maxLength="1"
                                        placeholder="•"
                                        defaultValue="8"
                                        className="w-full h-12 text-center text-lg font-extrabold text-slate-800 bg-white border-2 border-indigo-500 rounded-xl focus:outline-none ring-2 ring-indigo-100 shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        maxLength="1"
                                        placeholder="•"
                                        defaultValue="2"
                                        className="w-full h-12 text-center text-lg font-extrabold text-slate-800 bg-white border-2 border-indigo-500 rounded-xl focus:outline-none ring-2 ring-indigo-100 shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        maxLength="1"
                                        placeholder="•"
                                        className="w-full h-12 text-center text-lg font-extrabold text-slate-800 bg-white border-2 border-indigo-500 rounded-xl focus:outline-none ring-2 ring-indigo-100 shadow-sm animate-pulse"
                                    />
                                    <input
                                        type="text"
                                        maxLength="1"
                                        placeholder="•"
                                        className="w-full h-12 text-center text-lg font-extrabold text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition shadow-sm"
                                    />
                                    <input
                                        type="text"
                                        maxLength="1"
                                        placeholder="•"
                                        className="w-full h-12 text-center text-lg font-extrabold text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Resend Options and Clock Countdown */}
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-slate-500 font-medium">
                                    <svg className="w-4 h-4 text-indigo-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Resend in <strong className="text-slate-800">0:45</strong></span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowOtp(false)}
                                    className="text-indigo-600 font-bold text-xs transition hover:text-indigo-700"
                                >
                                    Edit Number
                                </button>
                            </div>

                            {/* Action Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full py-4 px-6 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    Verify & Submit
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </form>

                    {/* Secure Badge Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>SSL Secure</span>
                        </div>
                        <div className="flex gap-3 font-semibold text-slate-500">
                            <a href="#terms" className="hover:text-indigo-600 transition">Terms</a>
                            <span>•</span>
                            <a href="#privacy" className="hover:text-indigo-600 transition">Privacy</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
