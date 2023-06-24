import React, { useState } from "react"
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import "../../utils/styles/styles.css"

import {
    createAuthUserEmailPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

import { ERROR_CODES } from "../../utils/constants"
import FormInput from "../FormInput/FormInput"

import "./SignUp.css"

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
        <div className="flex flex-col items-start text-white">
            {loading ? (
                loading
            ) : (
                <>
                    <p className="text-4xl mb-4">Get Started Now</p>
                    <form
                        className="flex justify-start flex-col h-full w-full"
                        onSubmit={onSubmitHandler}
                    >
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
                        <div className="relative flex flex-col">
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
                            <div className="absolute top-[3.1rem] right-3 hover:cursor-pointer" onClick={() => setShow((prop) => !prop)}>
                                {show ? <BsEye className="h-5 w-5" /> : <BsEyeSlash className="w-5 h-5" /> }
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-white hover:bg-white-700 text-black font-bold py-3 px-4 rounded mt-2 text-xl"
                        >
                            Sign Up
                        </button>
                    </form>
                </>
            )}
        </div>
    )
}

export default SignUp
