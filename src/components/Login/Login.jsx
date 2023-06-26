import React, { useState } from "react";
import "../../utils/styles/styles.css";
import { signInWithEmailPass } from "../../utils/firebase/firebase.utils";
import { ERROR_CODES } from "../../utils/constants";
import FormInput from "../FormInput/FormInput";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const defaultFormFields = {
    email: "",
    password: "",
}

const Login = () => {
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

    return (
       <div className="flex flex-col items-start text-white">
            {loading ? (
                loading
            ) : (
                <>
                    <p className="text-4xl mb-4">Welcome back!</p>
                    <p className="text-xl">Enter your Credentials to access your account</p>
                    <form
                        className="flex mt-9 justify-start flex-col h-full w-full"
                        onSubmit={onSubmitHandler}
                    >
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
                            Login
                        </button>
                    </form>
                </>
            )}
        </div>
    )
};

export default Login;
