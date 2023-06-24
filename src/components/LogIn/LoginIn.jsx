import React, { useState } from "react";
import "../../utils/styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { signInWithEmailPass, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { ERROR_CODES } from "../../utils/constants";
import FormInput from "../FormInput/FormInput";

const defaultFormFields = {
    email: "",
    password: "",
}

const LogIn = () => {
    const [loading, setLoading] = useState("")
    const [show, setShow] = useState(false)
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading("Laoding...")
            await signInWithEmailPass(email, password)

            setTimeout(() => {
                setFormFields(defaultFormFields)
                setLoading("")
            }, 5000)
        } catch (error) {
            switch (error.code) {
                case ERROR_CODES.WRONG_PASSWORD:
                    console.log("Wrong password")
                    break
                case ERROR_CODES.EMAIL_NOT_FOUND:
                    console.log("Email not found. Sign up first")
                    break
                case ERROR_CODES.USER_NOT_FOUND:
                    console.log("User not found. Please sign up first")
                    break
                default:
                    console.log("Error in signing in", error.code)
            }
            setLoading("")
        }
    }

    const googleSignIn = async () => {
        await signInWithGooglePopup()
    }

    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
                <p className="mb-4">
                    Enter your credentials to access your account
                </p>
                <form onSubmit={onSubmitHandler}>
                    <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChangeHandler}
                        required
                    />
                    <FormInput
                        label="Password"
                        type={!show ? "password" : "text"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChangeHandler}
                        required
                    />
                    <div
                        className="hover:cursor-pointer"
                        onClick={() => setShow((prop) => !prop)}
                    >
                        EYE ICON
                    </div>
                    <button
                        type="submit"
                        className="bg-white hover:bg-what-700 text-black font-bold py-2 px-4 rounded"
                    >
                        Sign In
                    </button>
                </form>
                <button
                    onClick={googleSignIn}
                    className="my-4 bg-white hover:bg-what-700 text-black font-bold py-2 px-4 rounded"
                >
                    GOOGLE SIGN IN
                </button>
                <h1>{loading}</h1>
            </div>
        </div>
    )

    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Perform login logic here

    //     // Redirect to the profile page
    //     navigate("/profile");
    // };

    // return (
    //     <div className="flex h-full login-container">
    //         <div className="flex flex-col justify-center flex-1 px-6 pt-6 pb-4 text-white">
    //             <h2 className="mb-3 login-title">
    //                 <span className="text-4xl label-arial">Welcome back!</span>
    //             </h2>

    //             <p className="mb-7 label-arial">
    //                 Enter your credentials to access your account
    //             </p>
    //             <form
    //                 className="flex flex-col login-form"
    //                 onSubmit={handleSubmit}
    //             >
    //                 <div className="flex flex-col mb-6">
    //                     <label htmlFor="email" className="mb-1 label-arial">
    //                         Email
    //                     </label>
    //                     <input
    //                         type="email"
    //                         id="email"
    //                         name="email"
    //                         className={clsx(
    //                             "border rounded px-2 py-1 w-96 h-12 bg-transparent",
    //                             "focus:bg-transparent focus:outline-none",
    //                             "appearance-none"
    //                         )}
    //                         required
    //                     />
    //                 </div>

    //                 <div className="flex flex-col mb-2">
    //                     <label htmlFor="password" className="mb-1 font-['Arial']">
    //                         Password
    //                     </label>
    //                     <input
    //                         type="password"
    //                         id="password"
    //                         name="password"
    //                         className={clsx(
    //                             "border rounded px-2 py-1 w-96 h-12 bg-transparent",
    //                             "focus:bg-transparent focus:outline-none",
    //                             "appearance-none"
    //                         )}
    //                         required
    //                     />
    //                 </div>

    //                 <div className="flex justify-end mb-4">
    //                     <small>
    //                         <Link
    //                             to="/reset-password"
    //                             className="text-xs label-arial"
    //                         >
    //                             Forgot password?
    //                         </Link>
    //                     </small>
    //                 </div>

    //                 <button
    //                     type="submit"
    //                     className="h-12 px-4 py-2 mb-2 text-lg font-bold rounded submit-button label-arial hover:bg-gray-200 w-96 shadow-button"
    //                 >
    //                     Login
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );
};

export default LogIn;
