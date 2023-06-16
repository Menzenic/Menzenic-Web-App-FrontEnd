import React, { useState } from "react";
import SignInBackgroundImg from "../../images/auth-background.png";
import clsx from "clsx";
import "../../utils/styles/styles.css";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [resetCode, setResetCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetStep, setResetStep] = useState(1);

    const handleResetCodeSubmit = (e) => {
        e.preventDefault();
        setResetStep(2);
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        setResetStep(3);
    };

    return (
        <div className="newpage-container flex justify-between">
            <div className="left-section text-white pl-32 pr-14 py-10">
                {resetStep === 1 && (
                    <>
                        <h2 className="reset-title  mb-3">
                            <span className="label-arial text-4xl">
                                Reset Password
                            </span>
                        </h2>
                        <p className="mb-7 label-arial">
                            Please enter your email to receive a reset code.
                        </p>
                        <form
                            onSubmit={handleResetCodeSubmit}
                            className="reset-form flex flex-col"
                        >
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="email"
                                    className="mb-2 label-arial"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={clsx(
                                        "border rounded px-2 py-1 w-96 h-12 bg-transparent",
                                        "focus:bg-transparent focus:outline-none",
                                        "appearance-none"
                                    )}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={clsx(
                                    "submit-button label-arial text-lg hover:bg-gray-200 font-bold py-2 px-4 mb-2 w-96 h-12 rounded shadow-button mt-6"
                                )}
                            >
                                Send Reset Code
                            </button>
                        </form>
                    </>
                )}

                {resetStep === 2 && (
                    <>
                        <h2 className="reset-title  mb-3">
                            <span className="label-arial text-4xl">
                                Reset Password
                            </span>
                        </h2>
                        <p className="mb-7 label-arial">
                            Please enter the reset code sent to your email and
                            set a new password.
                        </p>
                        <form
                            onSubmit={handlePasswordReset}
                            className="reset-form flex flex-col"
                        >
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="resetCode"
                                    className="mb-2 label-arial"
                                >
                                    Reset Code
                                </label>
                                <input
                                    type="text"
                                    id="resetCode"
                                    name="resetCode"
                                    className={clsx(
                                        "border rounded px-2 py-1 w-96 h-12 bg-transparent",
                                        "focus:bg-transparent focus:outline-none",
                                        "appearance-none"
                                    )}
                                    value={resetCode}
                                    onChange={(e) =>
                                        setResetCode(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="newPassword"
                                    className="mb-2 label-arial"
                                >
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    className={clsx(
                                        "border rounded px-2 py-1 w-96 h-12 bg-transparent",
                                        "focus:bg-transparent focus:outline-none",
                                        "appearance-none"
                                    )}
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 label-arial"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className={clsx(
                                        "border rounded px-2 py-1 w-96 h-12 bg-transparent",
                                        "focus:bg-transparent focus:outline-none",
                                        "appearance-none"
                                    )}
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={clsx(
                                    "submit-button label-arial text-lg hover:bg-gray-200 font-bold py-2 px-4 mb-2 w-96 h-12 rounded shadow-button mt-6"
                                )}
                            >
                                Reset Password
                            </button>
                        </form>
                    </>
                )}

                {resetStep === 3 && (
                    <>
                        <h2 className="text-4xl label-arial font-bold mb-4">
                            Reset Success!
                        </h2>
                        <p className="mb-4 label-arial">
                            Your password has been successfully reset.
                        </p>
                        <a href="/login" className="text-white label-arial">
                            <button
                                type="submit"
                                className={clsx(
                                    "submit-button label-arial text-lg hover:bg-gray-200 font-bold py-2 px-4 mb-2 w-96 h-12 rounded shadow-button mt-6"
                                )}
                            >
                                Go to Login
                            </button>
                        </a>
                    </>
                )}
            </div>
            <div className="right-section relative">
                <img
                    src={SignInBackgroundImg}
                    alt="Background"
                    className="custom-image"
                />
            </div>
        </div>
    );
};

export default ResetPassword;
