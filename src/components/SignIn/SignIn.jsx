import React, { useState } from "react"

import {
    signInWithEmailPass,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils"

import FormInput from "../FormInput/FormInput"
import { ERROR_CODES } from "../../utils/constants"

const defaultFormFields = {
    email: "",
    password: "",
}

const SignIn = () => {
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
}

export default SignIn
