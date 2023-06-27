import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../utils/styles/styles.css";
import clsx from "clsx";

const Billing = () => {
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
                    <div className="relative w-[40.125rem]">
                        <div className="relative">
                            <select
                                className={clsx(
                                    "input-field",
                                    "h-[3.188rem] w-full text-xs bg-white border border-gray-300 rounded-md pl-2 pr-8 text-black"
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
                            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 12l6-6H4l6 6z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other input fields */}
            </div>
            {/* Billing right section */}
        </div>
    );
};

export default Billing;
