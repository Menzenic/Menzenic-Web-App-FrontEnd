import React, { useContext } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import clsx from "clsx"

import Footer from "../../components/Footer/Footer"
import { UserContext } from "../../contexts/user.context"

import profilePic from "../../images/Pngs/profile-pic.png"

const Profile = () => {
    const { currentUser } = useContext(UserContext)
    const location = useLocation()

    return (
        <div className="flex flex-col min-h-[66rem]">
            <div className="newpage-container pt-[6rem] pb-[6rem] flex flex-row items-center h-full w-full">
                <div className="w-1/4 pr-2 h-full">
                    <div className="flex flex-col text-white justify-center items-center p-8">
                        <div className="flex flex-col items-center overflow-hidden">
                            <img
                                src={
                                    currentUser?.photoURL
                                        ? currentUser.photoURL
                                        : profilePic
                                }
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
                                    className={clsx('cursor-pointer', location.pathname === '/profile' && 'font-extrabold')}
                                >
                                    <Link to="/profile">
                                        Profile Information
                                    </Link>
                                </li>
                                {/* <li
                                    className="cursor-pointer my-11"
                                >
                                    <Link to="order-history" className={clsx(location.pathname === 'profile/order-history' && 'font-extrabold')}>
                                        Order History
                                    </Link>
                                </li> */}
                                <li
                                    className={clsx("cursor-pointer")}
                                >
                                    <Link to="wishlist" className={clsx(location.pathname === '/profile/wishlist' && 'font-extrabold')}>Wishlist</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-px h-96 bg-white my-auto"></div>

                <div className="w-3/4 pl-2 min-h-[31rem]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
