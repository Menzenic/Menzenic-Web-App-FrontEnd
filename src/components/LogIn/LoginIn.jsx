import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                <h2 className="login-title mb-4 font-normal text-4xl leading-9">
                    Welcome back!
                </h2>
                <p className="mb-9 text-base font-normal leading-5 text-white">
                    Enter your credentials to access your account
                </p>
                <form className="flex flex-col">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="email" className="mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded px-2 py-1"
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
                            className="border rounded px-2 py-1"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <small>
                            <Link to="/reset-password" className="text-white">
                                Forgot Password?
                            </Link>
                        </small>
                    </div>

                    <button
                        type="submit"
                        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 mt-4 rounded"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
