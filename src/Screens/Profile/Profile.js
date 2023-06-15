import React, { useState } from "react";
import clsx from "clsx";
import profilePic from "../../images/profile-pic.png";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import OrderHistory from "../OrderHistory/OrderHistory";
import Wishlist from "../WishList/WishList";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
    const [activeSection, setActiveSection] = useState("profile");

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="profile flex flex-col min-h-screen">
            <div className="profile-container newpage-container flex flex-row flex-grow">
                <div className="profile-left-section w-1/4 pr-2">
                    <div className="profile-section mt-14 flex flex-col text-white justify-center items-center p-8">
                        <div className="profile-info text-center  overflow-hidden">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="object-cover w-148 h-148 rounded-full mb-3"
                            />
                            <h3 className="text-2xl font-bold my-2">
                                John Snow
                            </h3>
                            <p className="text-sm label-arial">
                                johns@gmail.com
                            </p>
                        </div>
                        <div className="profile-links mt-14 flex flex-row space-x-4 mb-4">
                            <ul className="text-center text-white label-arial">
                                <li
                                    className={clsx(
                                        "py-1 label-arial cursor-pointer",
                                        {
                                            "font-bold":
                                                activeSection === "profile",
                                        }
                                    )}
                                    onClick={() =>
                                        handleSectionChange("profile")
                                    }
                                >
                                    Profile Information
                                </li>
                                <li
                                    className={clsx(
                                        "py-3 label-arial cursor-pointer",
                                        {
                                            "font-bold":
                                                activeSection ===
                                                "orderHistory",
                                        }
                                    )}
                                    onClick={() =>
                                        handleSectionChange("orderHistory")
                                    }
                                >
                                    Order History
                                </li>
                                <li
                                    className={clsx(
                                        "py-3 label-arial cursor-pointer",
                                        {
                                            "font-bold":
                                                activeSection === "wishlist",
                                        }
                                    )}
                                    onClick={() =>
                                        handleSectionChange("wishlist")
                                    }
                                >
                                    Wishlist
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="vertical-line w-px h-96 bg-white my-auto"></div>

                <div className="profile-right-section w-3/4 pl-2">
                    <div className="p-8">
                        {activeSection === "profile" && <PersonalInfo />}
                        {activeSection === "orderHistory" && <OrderHistory />}
                        {activeSection === "wishlist" && <Wishlist />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;