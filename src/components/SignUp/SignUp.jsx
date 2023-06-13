import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const SignUp = () => {
    return (
        <div className="signup-container flex h-full">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                <h2 className="signup-title mb-4 font-normal text-4xl leading-9">
                    Get Started Now
                </h2>
                <form className="signup-form flex flex-col">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="name" className="mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={clsx(
                                "border rounded px-2 py-1 w-80 h-10 bg-transparent text-white",
                                "border-white",
                                "transition-all duration-300"
                            )}
                            required
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="email" className="mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={clsx(
                                "border rounded px-2 py-1 w-80 h-10 bg-transparent text-white",
                                "border-white",
                                "transition-all duration-300"
                            )}
                            required
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="password" className="mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={clsx(
                                "border rounded px-2 py-1 w-80 h-10 bg-transparent text-white",
                                "border-white",
                                "transition-all duration-300"
                            )}
                            style={{ color: "white" }}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 mt-4 mb-8 rounded"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
