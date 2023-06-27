import React, { useContext, useState } from "react"
import clsx from "clsx"
import profilePic from "../../images/Pngs/profile-pic.png"
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo"
import OrderHistory from "../../components/OrderHistory/OrderHistory"
import Wishlist from "../../components/WishList/WishList"
import Footer from "../../components/Footer/Footer"
import { UserContext } from "../../contexts/user.context"

const Profile = () => {
    const [activeSection, setActiveSection] = useState("profile")
    const { currentUser } = useContext(UserContext)

    console.log("currentUser:", currentUser)

    const handleSectionChange = (section) => {
        setActiveSection(section)
    }

    return (
        <div className="flex flex-col min-h-[66rem] overflow-y-hidden">
            <div className="newpage-container pt-[6rem] pb-[6rem] flex flex-row items-center bg-red-400 h-full w-full">
                <div className="w-1/4 pr-2 h-full">
                    <div className="flex flex-col text-white justify-center items-center p-8">
                        <div className="flex flex-col items-center overflow-hidden">
                            <img
                                src={currentUser?.photoURL ? currentUser.photoURL : profilePic}
                                alt="Profile"
                                className="object-cover w-[9.25rem] h-[9.25rem] rounded-full mb-3"
                            />
                            <h3 className="text-2xl font-bold">
                                {currentUser?.displayName
                                    ? currentUser.displayName
                                    : "John Snow"}
                            </h3>
                            <p className="text-xl label-arial">
                                {currentUser?.email
                                    ? currentUser.email
                                    : "johns@gmail.com"}
                            </p>
                        </div>
                        <div className="mt-14 flex flex-row space-x-4 mb-4">
                            <ul className="text-center text-white label-arial text-xl">
                                <li
                                    className={clsx(
                                        "cursor-pointer",
                                        "font-extrabold"
                                    )}
                                    onClick={() =>
                                        handleSectionChange("profile")
                                    }
                                >
                                    Profile Information
                                </li>
                                <li
                                    className="cursor-pointer my-11"
                                    onClick={() =>
                                        handleSectionChange("orderHistory")
                                    }
                                >
                                    Order History
                                </li>
                                <li
                                    className={clsx("cursor-pointer")}
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
                <div className="w-px h-96 bg-white my-auto"></div>

                <div className="w-3/4 pl-2">
                    <div className="p-8">
                        {activeSection === "profile" && <PersonalInfo />}
                        {activeSection === "orderHistory" && <OrderHistory />}
                        {activeSection === "wishlist" && <Wishlist />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
