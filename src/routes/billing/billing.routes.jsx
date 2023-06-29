import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckboxGroup from "react-checkbox-group";
import "../../utils/styles/styles.css";
import { DropdownIcon } from "../../utils/assets/svg";
import clsx from "clsx";

const Billing = () => {
    //handling email checkbox
    const [checkedValues, setCheckedValues] = useState([]);

    const handleCheckboxChange = (newValues) => {
        setCheckedValues(newValues);
    };

    //handling countries select
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(
                    "https://restcountries.com/v2/all"
                );
                const data = await response.json();
                setCountries(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountrySelect = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
    };

    return (
        <div className="newpage-container p-10 flex label-arial">
            <div className="billing-left w-[65%] px-4 text-white">
                <div className="flex items-center">
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
                    {/* </div> */}
                    <div className="flex items-center mt-2">
                        <CheckboxGroup
                            name="emailCheckbox"
                            value={checkedValues}
                            onChange={handleCheckboxChange}
                        >
                            {(Checkbox) => (
                                <div className="flex items-center mt-2">
                                    <label
                                        htmlFor="emailCheckbox"
                                        className="mr-2"
                                    >
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
                    <h2 className="text-base mt-7 mb-5 font-bold">
                        Shipping Address* (Must fill all the fields)
                    </h2>
                    <div className="w-[39.75rem]">
                        <div className="country-field relative bg-transparent text-white mb-5">
                            <div className="h-max z-[9999999]">
                                <select
                                    className={clsx(
                                        "input-field",
                                        "h-[3.188rem] w-full text-xs rounded pl-2 pr-8 remove-dropdown-arrow"
                                    )}
                                    onChange={handleCountrySelect}
                                    value={selectedCountry}
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option
                                            key={country.alpha2Code}
                                            value={country.name}
                                        >
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                                <div className="w-px h-[30px] bg-gray-200 mr-4"></div>
                                <DropdownIcon />
                            </div>
                        </div>
                    </div>
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
                            "h-[3.188rem] w-[19.375rem] text-xs ml-4 text-white placeholder-white mb-5"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="Phone No."
                        className={clsx(
                            "input-field",
                            "h-[3.188rem] w-[19.375rem] text-xs text-white placeholder-white mb-5"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="House no. / Building/ Flat no."
                        className={clsx(
                            "input-field",
                            "h-[3.188rem] w-[19.375rem] text-xs ml-4 text-white placeholder-white mb-5"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="Address* (Minimum 15 characters) "
                        className={clsx(
                            "input-field",
                            "h-[5.75rem] w-[39.75rem] text-xs text-white placeholder-white mb-5"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        className={clsx(
                            "input-field",
                            "h-[3.188rem] w-[12.125rem] text-xs text-white placeholder-white mb-5"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="State"
                        className={clsx(
                            "input-field",
                            "h-[3.188rem] w-[12.563rem] text-xs text-white placeholder-white mb-5 mx-4"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="Pin"
                        className={clsx(
                            "input-field",
                            "h-[3.188rem] w-[13.063rem] text-xs text-white placeholder-white mb-5"
                        )}
                    />
                </div>
            </div>
            <div className="billing-right w-[45%] pr-10">
                <div className="billing-details w-[35.688rem] h-auto rounded bg-white text-black p-6 pr-8 leading-10">
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
                        <p>Subtotal</p>
                        <p>449</p>
                    </div>
                    <div className="w-[26.25rem] h-px mx-auto bg-gray-300 line-opacity-66 "></div>
                    <div className="radio-buttons flex justify-between mt-5">
                        <div className="flex items-center justify-center">
                            <input
                                type="radio"
                                id="creditCard"
                                name="paymentMethod"
                                value="creditCard"
                                className="w-[1rem] h-[1rem] mr-1"
                            />
                            <label htmlFor="creditCard" className=" text-xs">
                                Credit Card / Debit Card / Net Banking
                            </label>
                        </div>
                        <div className="flex items-center justify-center">
                            <input
                                type="radio"
                                id="cashOnDelivery"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                className="w-[1rem] h-[1rem] mr-1"
                            />
                            <label
                                htmlFor="cashOnDelivery"
                                className=" text-xs"
                            >
                                Cash on Delivery
                            </label>
                        </div>
                    </div>
                    <div className="w-[26.25rem] h-px mx-auto bg-gray-300 line-opacity-66 my-5"></div>
                    <div className="privacy-policy">
                        <p className="text-xs">
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our{" "}
                            <span className="text-black font-bold">
                                Privacy Policy.
                            </span>
                        </p>
                    </div>
                    <div className="w-[26.25rem] h-px mx-auto bg-gray-300 line-opacity-66 my-5"></div>
                    <div className="term-condition flex items-center justify-center">
                        <label htmlFor="termsCheckbox">
                            <input
                                type="checkbox"
                                id="termsCheckbox"
                                className="mr-1 w-[17px] h-[17px]"
                            />
                            <span className="text-xs">
                                I have read and agree to the website terms and
                                conditions <u>terms and conditions*</u>
                            </span>
                        </label>
                    </div>
                    <div className="order-button flex items-center justify-center">
                        <button
                            className={clsx(
                                "border rounded-md px-8 py-2 items-center justify-center text-center",
                                "bg-[#0D0A0A] text-white",
                                "transition-all duration-200"
                            )}
                            // onClick={pla}
                        >
                            Place an Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
