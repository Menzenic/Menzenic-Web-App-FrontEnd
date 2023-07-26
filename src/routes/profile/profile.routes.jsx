import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import profilePic from "../../images/Pngs/profile-pic.png";
import { fetchOrdersAsync } from "../../store/orders/orders.action";

const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdersAsync());
    }, []);

    const currentUser = useSelector(selectCurrentUser);
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-[66rem]">
            <div className="newpage-container pt-14 sm:pt-0 flex flex-col md:flex-row items-center min-h-[47.87rem] w-full">
                <div className="md:w-1/3 h-full pt-40 pb-8">
                    <div className="flex flex-col  text-white justify-center items-center">
                        <div className="flex flex-col items-center overflow-hidden">
                            <img
                                src={
                                    currentUser?.photoURL
                                        ? currentUser.photoURL
                                        : profilePic
                                }
                                alt="Profile"
                                className="object-cover w-[7rem] h-[7rem] rounded-full mb-3"
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
                                        "cursor-pointer hover:font-extrabold",
                                        location.pathname === "/profile" &&
                                            "font-extrabold"
                                    )}
                                >
                                    <Link to="/profile">
                                        Personal Information
                                    </Link>
                                </li>
                                <li className="cursor-pointer my-11 hover:font-extrabold">
                                    <Link
                                        to="orders"
                                        className={clsx(
                                            location.pathname ===
                                                "/profile/orders" &&
                                                "font-extrabold"
                                        )}
                                    >
                                        Order History
                                    </Link>
                                </li>
                                <li
                                    className={clsx(
                                        "cursor-pointer hover:font-extrabold"
                                    )}
                                >
                                    <Link
                                        to="wishlist"
                                        className={clsx(
                                            location.pathname ===
                                                "/profile/wishlist" &&
                                                "font-extrabold"
                                        )}
                                    >
                                        Wishlist
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[25.25rem] h-px md:w-px md:h-[30.25rem] bg-white my-auto"></div>

                <div className="md:w-3/4 pt-8 sm:pl-2 flex items-center justify-center">
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
