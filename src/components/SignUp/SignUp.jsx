import React from "react";

const SignUp = () => {
    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-4">Get Started Now</h2>
                <form>
                    <label htmlFor="name" className="mb-2">
                        Name:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded px-2 py-1"
                            required
                        />
                    </label>

                    <label htmlFor="email" className="mb-2">
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded px-2 py-1"
                            required
                        />
                    </label>

                    <label htmlFor="password" className="mb-2">
                        Password:
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border rounded px-2 py-1"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
