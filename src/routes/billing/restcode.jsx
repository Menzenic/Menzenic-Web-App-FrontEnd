import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckboxGroup from "react-checkbox-group";
import "../../utils/styles/styles.css";
import clsx from "clsx";

const Billing = () => {
    const [checkedValues, setCheckedValues] = useState([]);

    const handleCheckboxChange = (newValues) => {
        setCheckedValues(newValues);
    };

    return (
        <div className="newpage-container p-10 flex label-arial">
            <div className="billing-left w-[65%] px-4 text-white">
                <div className="flex items-center ">
                    <h2 className="text-base font-bold mb-2 text-center w-[calc(100% - 135px)]">
                        Contact
                    </h2>
                    <Link
                        to="/auth"
                        className="text-white text-right text-xs label-arial ml-36"
                    >
                        Already have an account?{" "}
                        <span className="hover:underline">Login</span>
                    </Link>
                </div>

                <div className="contact-info">
                    <input
                        type="text"
                        placeholder="Email"
                        className={clsx(
                            "input-field",
                            "h-[2.188rem] w-[25.125rem] text-xs text-white placeholder-white"
                        )}
                    />
                </div>
                <div className="flex items-center mt-2">
                    <CheckboxGroup
                        name="emailCheckbox"
                        value={checkedValues}
                        onChange={handleCheckboxChange}
                    >
                        {(Checkbox) => (
                            <div className="flex items-center mt-2">
                                <label htmlFor="emailCheckbox" className="mr-2">
                                    <Checkbox
                                        id="emailCheckbox"
                                        className="input-checkbox"
                                    />
                                </label>
                                <label htmlFor="emailCheckbox">
                                    Email me with news and offers
                                </label>
                            </div>
                        )}
                    </CheckboxGroup>
                </div>
                <h2 className="text-base mt-7 mb-5">
                    Shipping Address* (Must fill all the fields)
                </h2>
                <input
                    type="text"
                    placeholder="Country/region"
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[40.125rem] text-xs text-white placeholder-white mb-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="First Name"
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[19.375rem] text-xs text-white placeholder-white mb-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[19.375rem] text-xs ml-5 text-white placeholder-white mb-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="House no. / Building/ Flat no."
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[14.125rem] text-xs text-white placeholder-white mb-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="Address* (Minimum 15 characters) "
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[29.625rem] text-xs text-white placeholder-white mb-5 ml-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="City"
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[14.125rem] text-xs text-white placeholder-white mb-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="State"
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[14.125rem] text-xs text-white placeholder-white mb-5 mx-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="Pin"
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[14.125rem] text-xs text-white placeholder-white mb-5"
                    )}
                />
                <input
                    type="text"
                    placeholder="Phone No."
                    className={clsx(
                        "input-field",
                        "h-[3.188rem] w-[14.125rem] text-xs text-white placeholder-white mb-5"
                    )}
                />
            </div>
            <div className="billing-right w-[35%]">
                <div className="billing-details w-[28.5rem] h-[32rem] rounded bg-white text-black p-6 leading-10">
                    <h2 className="text-center text-2xl mb-2">Your Order</h2>
                    <div className="w-[26.25rem] h-0.5 mx-auto bg-gray-300"></div>
                    <div className="flex justify-between mt-4 mb-3 ">
                        <p>Product</p>
                        <p>Sub Total</p>
                    </div>
                    <div className="w-[26.25rem] h-0.5 mx-auto bg-gray-300"></div>
                    <div className="flex justify-between mt-4 mb-3 custom-opacity-51 ">
                        <p>Product1</p>
                        <p>399</p>
                    </div>
                    <div className="w-[26.25rem] h-px mx-auto bg-gray-300 line-opacity-66 "></div>
                    <div className="flex justify-between mt-4 mb-3 custom-opacity-51 ">
                        <p>Delivery Charge</p>
                        <p>50</p>
                    </div>
                    <div className="w-[26.25rem] h-px mx-auto bg-gray-300 line-opacity-66 "></div>
                    <div className="flex justify-between mt-4 mb-3 custom-opacity-51 line-opacity-66 ">
                        <p>Sub Total</p>
                        <p>449</p>
                    </div>
                    <div className="w-[26.25rem] h-px mx-auto bg-gray-300 line-opacity-66 "></div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
