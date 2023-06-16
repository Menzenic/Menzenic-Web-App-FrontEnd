import React, { useState } from "react";
import { GoogleIcon, AppleIcon } from "../../utils/assets";
import LoginForm from "../../components/LogIn/LoginIn";
import SignupForm from "../../components/SignUp/SignUp";
import SignInBackgroundImg from "../../images/auth-background.png";
import "../../utils/styles/styles.css";
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
        <div className="newpage-container flex justify-between">
            <div className="left-section pl-32 pr-14 py-3">
                <div className="rounded-lg">
                    {isSignup ? (
                        <SignupForm onClose={onClose} toggleForm={toggleForm} />
                    ) : (
                        <LoginForm onClose={onClose} toggleForm={toggleForm} />
                    )}

                    {/* Line */}
                    <div className="line  bg-white h-px mt-4 mb-5 flex items-center justify-center mx-auto border-2 border-gray-300">
                        <div className="line-box bg-white flex items-center justify-center mx-2">
                            <span className="span-or p-1">Or</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="social-login justify-around flex pt-4">
                        <button
                            className="google-login bg-transparent border border-white text-white px-4 py-2 rounded-lg mr-2 w-48 h-8 flex items-center"
                            onClick={handleGoogleLogin}
                        >
                            <GoogleIcon className="p-2" />
                            <span className="ml-2 button-span">
                                Sign in with Google
                            </span>
                        </button>
                        <button
                            className="apple-login bg-transparent border border-white text-white px-4 py-2 rounded-lg mr-2 w-48 h-8 flex items-center"
                            onClick={handleAppleLogin}
                        >
                            <AppleIcon className="mr-2" />
                            <span className="ml-2 button-span">
                                Sign in with Apple
                            </span>
                        </button>
                    </div>

                    {/* Toggle Form */}
                    <p className="toggle-form-link text-white text-sm label-arial text-center mt-4">
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

            <div className="right-section relative">
                <img
                    src={SignInBackgroundImg}
                    alt="Background"
                    className="custom-image filter drop-shadow(-16px 9px 61px rgba(0, 0, 0, 0.25))"
                />
            </div>
        </div>
    );
};

export default Authorization;
