import React, { useState } from "react";
import { GoogleIcon, AppleIcon } from "../../utils/assets";
import LoginForm from "../../components/LogIn/LoginIn";
import SignupForm from "../../components/SignUp/SignUp";
import SignInBackgroundImg from "../../images/auth-background.png";
import "./Auth.css";
// import firebase from "firebase/app";
// import "firebase/auth";

const Authorization = ({ onClose }) => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    const handleToggleForm = () => {
        toggleForm();
    };

    const handleGoogleLogin = () => {
        // const provider = new firebase.auth.GoogleAuthProvider();
        // firebase
        //     .auth()
        //     .signInWithPopup(provider)
        //     .then((result) => {
        //         // Handle successful login
        //     })
        //     .catch((error) => {
        //         // Handle login error
        //     });
    };

    const handleAppleLogin = () => {
        // const provider = new firebase.auth.OAuthProvider("apple.com");
        // firebase
        //     .auth()
        //     .signInWithPopup(provider)
        //     .then((result) => {
        //         // Handle successful login
        //     })
        //     .catch((error) => {
        //         // Handle login error
        //     });
    };

    return (
        <div className="authorization-container flex justify-between">
            <div className="left-section p-16">
                <div className="rounded-lg shadow-lg">
                    {isSignup ? (
                        <SignupForm onClose={onClose} toggleForm={toggleForm} />
                    ) : (
                        <LoginForm onClose={onClose} toggleForm={toggleForm} />
                    )}

                    {/* Line */}
                    <div className="line bg-white w-full h-px mt-4 mb-8 flex items-center justify-center mx-auto max-w-xs">
                        <div className="line-box bg-white flex items-center justify-center mx-2">
                            <span className="text-black-400 text-xs font-medium px-1">
                                Or
                            </span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="social-login flex pt-4">
                        <button
                            className="google-login bg-transparent border border-white text-white px-1 py-2 rounded-lg mr-2 w-48 h-8 flex items-center"
                            onClick={handleGoogleLogin}
                        >
                            <GoogleIcon />
                            <span className="ml-2">Sign in with Google</span>
                        </button>
                        <button
                            className="apple-login bg-transparent border border-white text-white px-1 py-2 rounded-lg mr-2 w-48 h-8 flex items-center"
                            onClick={handleAppleLogin}
                        >
                            <AppleIcon className="mr-2" />
                            <span className="ml-2">Sign in with Apple</span>
                        </button>
                    </div>

                    {/* Toggle Form */}
                    <p className="toggle-form-link text-white text-center mt-4">
                        <span>
                            {isSignup
                                ? "Don't have an account?"
                                : "Already have an account?"}
                        </span>
                        {isSignup ? (
                            <span
                                className="cursor-pointer ml-2 font-bold"
                                onClick={handleToggleForm}
                            >
                                Login
                            </span>
                        ) : (
                            <span
                                className="cursor-pointer ml-2 font-bold"
                                onClick={handleToggleForm}
                            >
                                Sign Up
                            </span>
                        )}
                    </p>
                </div>
            </div>

            <div className="right-section">
                <img src={SignInBackgroundImg} alt="Background" />
            </div>
        </div>
    );
};

export default Authorization;
