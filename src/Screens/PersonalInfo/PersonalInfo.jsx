import React from "react";
import clsx from "clsx";
import "../../utils/styles/styles.css";

const PersonalInfo = () => {
    return (
        <div className="user-info-container text-white pl-10 py-4 ml-6">
            {/* <h2 className="text-2xl text-white font-bold mb-4 label-arial">
                Your Information
            </h2> */}
            <div className="flex flex-wrap">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">Name</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
                <div className="mb-4 w-1/2 pl-2">
                    <label className="block mb-2">Email</label>
                    <input type="email" className={clsx("input-field")} />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">Date of Birth</label>
                    <input type="date" className={clsx("input-field")} />
                </div>
                <div className="mb-4 w-1/2 pl-2 flex flex-col">
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

            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <div className="flex flex-wrap">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">House/Flat Number</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
                <div className="mb-4 w-1/2 pl-2">
                    <label className="block mb-2">Apartment</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="mb-4 w-1/2 pr-2">
                    <label className="block mb-2">Landmark</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
                <div className="mb-4 w-1/2 pl-2">
                    <label className="block mb-2">Pincode</label>
                    <input type="text" className={clsx("input-field")} />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
