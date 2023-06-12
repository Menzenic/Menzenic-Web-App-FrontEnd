import React, { useState } from "react";
import { GoogleIcon, AppleIcon } from "../../utils/assets";
import LoginForm from "../../components/LogIn/LoginIn";
import SignupForm from "../../components/SignUp/SignUp";
import SignInBackgroundImg from "../../images/auth-background.png";
import "./Auth.css";

const Authorization = ({ onClose }) => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleToggleForm = () => {
        toggleForm();
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic
    };

    const handleAppleLogin = () => {
        // Handle Apple login logic
    };

    return (
        <div className="authorization-container p-10 flex items-center justify-center min-h-screen bg-black">
            <div className="left-section flex">
                <div className="rounded-lg shadow-lg p-6">
                    {isSignup ? (
                        <SignupForm onClose={onClose} toggleForm={toggleForm} />
                    ) : (
                        <LoginForm onClose={onClose} toggleForm={toggleForm} />
                    )}

                    <div className="line bg-white w-full h-px my-4"></div>

                    <div className="social-login flex">
                        <button
                            className="google-login bg-transparent border border-white text-white px-4 py-2 rounded-lg mr-2 hover:bg-white hover:text-black flex items-center"
                            onClick={handleGoogleLogin}
                        >
                            <GoogleIcon />
                            <span className="ml-2">Sign in with Google</span>
                        </button>
                        <button
                            className="apple-login bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black flex items-center"
                            onClick={handleAppleLogin}
                        >
                            <AppleIcon className="mr-2" />
                            <span className="ml-2">Sign in with Apple</span>
                        </button>
                    </div>
                    <p
                        className="toggle-form-link text-center text-sm text-white mt-4 cursor-pointer"
                        onClick={handleToggleForm}
                    >
                        {isSignup
                            ? "Already have an account? Login"
                            : "Don't have an account? Sign Up"}
                    </p>
                </div>
            </div>

            <div className="right-section flex-1">
                <img
                    src={SignInBackgroundImg}
                    alt="Background"
                    className="w-558 h-729 left-771 top-131"
                    style={{
                        background: "url(6383e5ca483b677c8ad621119c6d27f8.jpg)",
                        filter: "drop-shadow(-16px 9px 61px rgba(0, 0, 0, 0.25))",
                    }}
                />
            </div>
        </div>
    );
};

export default Authorization;
