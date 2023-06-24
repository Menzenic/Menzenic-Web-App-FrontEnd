import React, { useState } from "react"
import { GoogleIcon, AppleIcon } from "../../utils/assets"
import LoginForm from "../../components/LogIn/LoginIn"
import SignupForm from "../../components/SignUp/SignUp"
import SignInBackgroundImg from "../../images/auth-background.png"
import "../../utils/styles/styles.css"
import { Link } from "react-router-dom"

import { AiOutlineArrowLeft } from "react-icons/ai"

// import firebase from "firebase/app";
// import "firebase/auth";

const Authorization = ({ onClose }) => {
    const [isSignup, setIsSignup] = useState(false)

    const toggleForm = () => {
        setIsSignup(!isSignup)
    }

    const handleToggleForm = () => {
        toggleForm()
    }

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
    }

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
    }

    return (
        <div
            className="flex items-center justify-between h-screen relative"
            style={{
                background:
                    "linear-gradient(180deg, #000000 0%, rgba(26, 25, 25, 0.679) 151.51%, rgba(15, 15, 15, 0.3) 303.21%)",
            }}
        >
            <Link className="absolute rounded-md top-10 left-10" to={".."}>
                <button>
                    <AiOutlineArrowLeft className="text-white h-10 w-10" />
                </button>
            </Link>
            <div className="flex justify-between">
                <div className="ml-60 rounded-lg w-full">
                    {!isSignup ? (
                        <SignupForm onClose={onClose} toggleForm={toggleForm} />
                    ) : (
                        <LoginForm onClose={onClose} toggleForm={toggleForm} />
                    )}

                    {/* Line */}
                    <div className="w-full bg-white h-px mt-11 mb-5 flex items-center justify-center border-gray-300">
                        {/* <div className="bg-white flex items-center justify-center mx-2 h-4 w-6">
                            <span className="p-1 font-semibold text-[13px]">Or</span>
                        </div> */}
                    </div>

                    {/* Social Login */}
                    <div className="social-login justify-around flex pt-4">
                        <button
                            className="google-login bg-transparent border border-white text-white px-4 py-2 rounded-lg mr-2 w-48 h-10 flex items-center"
                            onClick={handleGoogleLogin}
                        >
                            <GoogleIcon className="p-2" />
                            <span className="ml-2 font-poppins text-xs">
                                Sign in with Google
                            </span>
                        </button>
                        <button
                            className="apple-login bg-transparent border border-white text-white px-4 py-2 rounded-lg mr-2 w-48 h-10 flex items-center"
                            onClick={handleAppleLogin}
                        >
                            <AppleIcon className="mr-2" />
                            <span className="ml-2 font-poppins text-xs">
                                Sign in with Apple
                            </span>
                        </button>
                    </div>

                    {/* Toggle Form */}
                    <p className="toggle-form-link text-white text-base label-arial text-center mt-4">
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
                    className="h-screen filter drop-shadow(-16px 9px 61px rgba(0, 0, 0, 0.25))"
                />
            </div>
        </div>
    )
}

export default Authorization
