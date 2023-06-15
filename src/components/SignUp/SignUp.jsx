import React from "react";
import "../../utils/styles/styles.css";
import "./SignUp.css";
import clsx from "clsx";

const SignUp = () => {
    return (
        <div className="signup-container flex h-full">
            <div className="flex-1 flex flex-col justify-center px-6 pt-6 pb-4 text-white">
                <h2 className="signup-title mb-4">
                    <span className="label-arial text-4xl">
                        Get Started Now
                    </span>
                </h2>
                <form className="signup-form flex flex-col">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="name" className="mb-1 label-arial">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={clsx(
                                "border rounded px-2 py-1 w-96 h-12 bg-transparent text-white",
                                "border-white",
                                "transition-all duration-300"
                            )}
                            required
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="email" className="mb-1 label-arial">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={clsx(
                                "border rounded px-2 py-1 w-96 h-12 bg-transparent text-white",
                                "border-white",
                                "transition-all duration-300"
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
                                "border rounded px-2 py-1 w-96 h-12 bg-transparent text-white",
                                "border-white",
                                "transition-all duration-300"
                            )}
                            style={{ color: "white" }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-button label-arial text-lg hover:bg-gray-200 font-bold py-2 px-4 mt-4 mb-2 h-12 rounded shadow-button"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
