import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

import { selectCurrentUser } from "../../store/user/user.selector";
import { SearchBar } from "../../components";

import {
    SearchIcon,
    UserLoginLogo,
    ShoppingCart,
    WishListIcon,
    MenzenicFullLogo,
} from "../../utils/assets";
import "./navigation.styles.css";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const location = useLocation();
    const pathName = location.pathname;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="text-white flex justify-between items-center px-5 mt-7 absolute top-0 w-full z-[999] bg-transparent">
                <button
                    className="mr-0 sm:mr-4 text-2xl focus:outline-none md:hidden"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <FiX className="h-6 w-6" />
                    ) : (
                        <FiMenu className="h-6 w-6" />
                    )}
                </button>
                <Link to="/">
                    <MenzenicFullLogo
                        className={clsx(
                            isMobile ? "h-6 w-40" : "h-7 w-[215px]"
                        )}
                    />
                </Link>

                <div className="hidden md:flex w-[32.813rem] justify-between text-xl font-medium -mt-2">
                    <Link
                        to="/"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Home</p>
                    </Link>
                    <Link
                        to="/products"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/products" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Products</p>
                    </Link>
                    <Link
                        to="/about-us"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/about-us" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>About us</p>
                    </Link>
                    <Link
                        to="/health-assesment"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/health-assesment" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Health Assesment</p>
                    </Link>
                    <Link
                        to="/blogs"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/blogs" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Blogs</p>
                    </Link>
                </div>

                <div className="mr-2 flex items-center">
                    {isMobile ? (
                        <SearchIcon className="h-7 w-7" />
                    ) : (
                        <SearchBar icon={<FiSearch />} />
                    )}
                    <Link to={!currentUser ? "/auth" : "/profile"}>
                        <div className="mx-2 sm:mx-4">
                            <UserLoginLogo onClick={() => {}} />
                        </div>
                    </Link>
                    <Link to="/shop" className="relative">
                        <ShoppingCart />
                    </Link>
                    <Link to="/profile/wishlist" className="ml-2 sm:ml-4">
                        <WishListIcon className="h-7 w-7" />
                    </Link>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="text-white flex flex-col px-5 mt-16 w-full bg-black md:hidden fixed left-0 top-0 z-50">
                    <Link
                        to="/"
                        className={clsx(
                            "block py-3 hover-underline-animation",
                            pathName === "/" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                        onClick={toggleMobileMenu}
                    >
                        <p>Home</p>
                    </Link>
                    <Link
                        to="/products"
                        className={clsx(
                            "block py-3 hover-underline-animation",
                            pathName === "/products" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                        onClick={toggleMobileMenu}
                    >
                        <p>Products</p>
                    </Link>
                    <Link
                        to="/about-us"
                        className={clsx(
                            "block py-3 hover-underline-animation",
                            pathName === "/about-us" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                        onClick={toggleMobileMenu}
                    >
                        <p>About us</p>
                    </Link>
                    <Link
                        to="/health-assesment"
                        className={clsx(
                            "block py-3 hover-underline-animation",
                            pathName === "/health-assesment" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                        onClick={toggleMobileMenu}
                    >
                        <p>Health Assesment</p>
                    </Link>
                    <Link
                        to="/blogs"
                        className={clsx(
                            "block py-3 hover-underline-animation",
                            pathName === "/blogs" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                        onClick={toggleMobileMenu}
                    >
                        <p>Blogs</p>
                    </Link>
                </div>
            )}

            <Outlet />
        </>
    );
};

export default Navigation;
