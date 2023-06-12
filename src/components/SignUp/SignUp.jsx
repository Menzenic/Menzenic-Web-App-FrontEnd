import React from "react";

const SignUp = () => {
    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                <h2 className="login-title mb-4 font-normal text-4xl leading-9">
                    Get Started Now
                </h2>
                <form>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded px-2 py-1"
                            required
                        />
                    </div>

                    <div className="flex flex-col mb-4">
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

                    <div className="flex flex-col mb-4">
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

                    <button
                        type="submit"
                        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 mt-4 rounded"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
