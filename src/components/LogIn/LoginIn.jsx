import React from "react";
import "../../utils/styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";

const LogIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here

        // Redirect to the profile page
        navigate("/profile");
    };

    return (
        <div className="login-container flex h-full">
            <div className="flex-1 flex flex-col justify-center px-6 pt-6 pb-4 text-white">
                <h2 className="login-title mb-3">
                    <span className="label-arial text-4xl">Welcome back!</span>
                </h2>

                <p className="mb-7 label-arial">
                    Enter your credentials to access your account
                </p>
                <form
                    className="login-form flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col mb-6">
                        <label htmlFor="email" className="mb-1 label-arial">
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
                            required
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="password" className="mb-1 label-arial">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={clsx(
                                "border rounded px-2 py-1 w-96 h-12 bg-transparent",
                                "focus:bg-transparent focus:outline-none",
                                "appearance-none"
                            )}
                            required
                        />
                    </div>

                    <div className="flex justify-end  mb-4">
                        <small>
                            <Link
                                to="/reset-password"
                                className="text-xs label-arial"
                            >
                                Forgot password?
                            </Link>
                        </small>
                    </div>

                    <button
                        type="submit"
                        className="submit-button label-arial text-lg hover:bg-gray-200 font-bold py-2 px-4 mb-2 w-96 h-12 rounded shadow-button"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
