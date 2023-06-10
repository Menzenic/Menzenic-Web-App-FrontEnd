import React, { useState } from "react";
import LoginForm from "../../components/SignIn/SignIn";
import SignupForm from "../../components/SignUp/SignUp";
// import { GoogleIcon, AppleIcon } from "../../utils/assets";
import SignInBackgroundImg from "../../images/auth-background.png";

const Authorization = ({ onClose }) => {
    const [isLoginFormOpen, setLoginFormOpen] = useState(false);
    const [isSignupFormOpen, setSignupFormOpen] = useState(false);

    const toggleLoginForm = () => {
        setLoginFormOpen(!isLoginFormOpen);
    };

    const toggleSignupForm = () => {
        setSignupFormOpen(!isSignupFormOpen);
    };

    return (
        <div>
            {isLoginFormOpen ? (
                <LoginForm onClose={toggleLoginForm} />
            ) : isSignupFormOpen ? (
                <SignupForm onClose={toggleSignupForm} />
            ) : (
                <div>
                    <div onClick={toggleLoginForm}>Sign In</div>
                    <div onClick={toggleSignupForm}>Sign Up</div>
                </div>
            )}

            <div
                className="flex-1 bg-cover"
                style={{ backgroundImage: `url(${SignInBackgroundImg})` }}
            ></div>
        </div>
    );
};

export default Authorization;
