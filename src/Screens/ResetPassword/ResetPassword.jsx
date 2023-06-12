import React, { useState } from "react";
import SignInBackgroundImg from "../../images/auth-background.png";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [resetCode, setResetCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetStep, setResetStep] = useState(1);

    const handleResetCodeSubmit = (e) => {
        e.preventDefault();
        // TODO: Send API request to verify the reset code
        // and proceed to the next step
        setResetStep(2);
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        // TODO: Send API request to reset the password
        // based on the reset code and new password
        // Display success message or redirect to login page
        // upon successful password reset
        setResetStep(3);
    };

    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                {resetStep === 1 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">
                            Reset Password
                        </h2>
                        <p className="mb-4">
                            Please enter your email to receive a reset code.
                        </p>
                        <form
                            onSubmit={handleResetCodeSubmit}
                            className="flex flex-col"
                        >
                            <label htmlFor="email" className="mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border rounded px-2 py-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <button
                                type="submit"
                                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 mt-4 rounded"
                            >
                                Send Reset Code
                            </button>
                        </form>
                    </>
                )}

                {resetStep === 2 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">
                            Reset Password
                        </h2>
                        <p className="mb-4">
                            Please enter the reset code sent to your email and
                            set a new password.
                        </p>
                        <form
                            onSubmit={handlePasswordReset}
                            className="flex flex-col"
                        >
                            <label htmlFor="resetCode" className="mb-2">
                                Reset Code
                            </label>
                            <input
                                type="text"
                                id="resetCode"
                                name="resetCode"
                                className="border rounded px-2 py-1"
                                value={resetCode}
                                onChange={(e) => setResetCode(e.target.value)}
                                required
                            />

                            <label htmlFor="newPassword" className="mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                className="border rounded px-2 py-1"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />

                            <label htmlFor="confirmPassword" className="mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="border rounded px-2 py-1"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />

                            <button
                                type="submit"
                                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 mt-4 rounded"
                            >
                                Reset Password
                            </button>
                        </form>
                    </>
                )}

                {resetStep === 3 && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">
                            Password Reset Success
                        </h2>
                        <p className="mb-4">
                            Your password has been successfully reset.
                        </p>
                        <a href="/login" className="text-white">
                            Go to Login
                        </a>
                    </>
                )}
            </div>
            <div className="right-section flex-1">
                <img
                    src={SignInBackgroundImg}
                    alt="Background"
                    className="w-558 h-629 left-771 top-131"
                    style={{
                        background: "url(6383e5ca483b677c8ad621119c6d27f8.jpg)",
                        filter: "drop-shadow(-16px 9px 61px rgba(0, 0, 0, 0.25))",
                    }}
                />
            </div>
        </div>
    );
};

export default ResetPassword;
