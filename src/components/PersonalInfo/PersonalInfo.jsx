import React, { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectCurrentUser } from "../../store/user/user.selector";

import "../../utils/styles/styles.css";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
};

const PersonalInfo = () => {
    const [fields, setFields] = useState(defaultFormFields);
    const { displayName, email, password } = fields;

    const currentUser = useSelector(selectCurrentUser);

    return (
        <div className="text-white text-xl pl-0 py-10 md:pl-10 mx-8 md:ml-6 min-h-[26rem]">
            {/* <h2 className="text-2xl text-white font-bold mb-4 label-arial">
                Your Information
            </h2> */}
            <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        className={clsx(
                            "input-field",
                            "h-[3.25rem] w-[20rem] text-lg"
                        )}
                        value={
                            currentUser?.displayName && currentUser?.displayName
                        }
                    />
                </div>
                <div className="mb-4 w-1/2 pl-0 md:pl-2">
                    <label className="block mb-2">Email</label>
                    <input type="email" className={clsx("input-field")} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">Date of Birth</label>
                    <input type="date" className={clsx("input-field")} />
                </div>
                <div className="mb-4 w-1/2 pl-0 md:pl-2 flex flex-col">
                    <label className="block mb-2">Contact</label>
                    <div className="relative flex">
                        <input
                            type="tel"
                            className={clsx(
                                "input-field-country-code mr-3 w-16"
                            )}
                        />
                        <input
                            type="tel"
                            className={clsx("input-field-mobile-number")}
                        />
                    </div>
                </div>
            </div>

            <h2 className="font-bold mb-4 mt-10">Address</h2>
            <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">House/Flat Number</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
                <div className="mb-4 w-1/2 md:pl-2">
                    <label className="block mb-2">Apartment</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">Landmark</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
                <div className="w-1/2 md:pl-2">
                    <label className="block mb-2">Pincode</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
