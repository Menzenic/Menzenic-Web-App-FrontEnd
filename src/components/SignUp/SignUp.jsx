import React, { useState } from "react"

import {
    createAuthUserEmailPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

import { ERROR_CODES } from "../../utils/constants"
import FormInput from "../FormInput/FormInput"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
}

const SignUp = () => {
    const [loading, setLoading] = useState("")
    const [show, setShow] = useState(false)
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password } = formFields

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading("Loading...")
            setTimeout(() => {
                setLoading("")
                setFormFields(defaultFormFields)
            }, 5000)
            const { user } = await createAuthUserEmailPassword(email, password)
            await createUserDocumentFromAuth(user, {
                displayName,
            })
        } catch (error) {
            switch (error.code) {
                case ERROR_CODES.EMAIL_ALREADY_IN_USE:
                    console.log("Email already in use")
                    break
                case ERROR_CODES.PASSWORD_LESS_THAN_SIX_CHARACTERS:
                    console.log("Password should be greater than 6 characters")
                    break
                case ERROR_CODES.USER_NOT_FOUND:
                    console.log("User not found consider signing up first")
                    break
                default:
                    console.log("User could not be logged in", error)
            }
        }
    }

    return (
        <div className="flex h-screen bg-black">
            <div className="flex-1 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-bold mb-4">Get Started Now</h2>
                <form onSubmit={onSubmitHandler}>
                    <FormInput
                        label="Name"
                        type="text"
                        id="name"
                        name="displayName"
                        className="mb-2"
                        onChange={onChangeHandler}
                        value={displayName}
                        required
                    />

                    <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        className="mb-2"
                        onChange={onChangeHandler}
                        value={email}
                        required
                    />
                    <FormInput
                        label="Password"
                        type={!show ? "password" : "text"}
                        id="password"
                        name="password"
                        className="mb-2"
                        onChange={onChangeHandler}
                        value={password}
                        required
                    />
                    <div onClick={() => setShow((prop) => !prop)}>EYE ICON</div>

                    <button
                        type="submit"
                        className="bg-white hover:bg-white-700 text-black font-bold py-2 px-4 rounded"
                    >
                        Sign Up
                    </button>
                </form>
                <h1>{loading}</h1>
            </div>
        </div>
    )
}

export default SignUp
