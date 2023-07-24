import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

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
    const [bool, setBool] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSmScreen, setIsSmScreen] = useState(false);
    const [isMdScreen, setIsMdScreen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(false);
    const [isXlScreen, setIsXlScreen] = useState(false);
    const [is2XlScreen, setIs2XlScreen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWith = window.innerWidth;
            if (windowWith < 640) {
                setIsSmScreen(true);
                setIsMdScreen(false);
                setIsLgScreen(false);
                setIsXlScreen(false);
                setIs2XlScreen(false);
            } else if (windowWith < 768) {
                setIsSmScreen(false);
                setIsMdScreen(true);
                setIsLgScreen(false);
                setIsXlScreen(false);
                setIs2XlScreen(false);
            } else if (windowWith < 1024) {
                setIsSmScreen(false);
                setIsMdScreen(false);
                setIsLgScreen(true);
                setIsXlScreen(false);
                setIs2XlScreen(false);
            } else if (windowWith < 1280) {
                setIsSmScreen(false);
                setIsMdScreen(false);
                setIsLgScreen(false);
                setIsXlScreen(true);
                setIs2XlScreen(false);
            } else {
                setIsSmScreen(false);
                setIsMdScreen(false);
                setIsLgScreen(false);
                setIsXlScreen(false);
                setIs2XlScreen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {!bool ? (
                <>
                    <div
                        className={clsx(
                            "text-white flex justify-between items-center px-5 top-0 w-full z-[999]",
                            isMobileMenuOpen
                                ? "fixed bg-black py-7"
                                : "absolute mt-7",
                        )}
                    >
                        <Link to="/">
                            <MenzenicFullLogo className="h-9 md:h-20 md:w-1/2" />
                        </Link>

                        <div className="hidden lg:flex lg:text-base xl:w-[32.813rem] justify-between xl:text-xl font-medium -mt-2">
                            <Link
                                to="/"
                                className={clsx(
                                    "hover-underline-animation",
                                    pathName === "/" &&
                                        "underline underline-offset-[5px] font-bold",
                                )}
                            >
                                <p>Home</p>
                            </Link>
                            <Link
                                to="/products"
                                className={clsx(
                                    "hover-underline-animation",
                                    pathName === "/products" &&
                                        "underline underline-offset-[5px] font-bold",
                                )}
                            >
                                <p>Products</p>
                            </Link>
                            <Link
                                to="/about-us"
                                className={clsx(
                                    "hover-underline-animation",
                                    pathName === "/about-us" &&
                                        "underline underline-offset-[5px] font-bold",
                                )}
                            >
                                <p>About us</p>
                            </Link>
                            <Link
                                to="/health-assesment"
                                className={clsx(
                                    "hover-underline-animation",
                                    pathName === "/health-assesment" &&
                                        "underline underline-offset-[5px] font-bold",
                                )}
                            >
                                <p>Health Assesment</p>
                            </Link>
                            <Link
                                to="/blogs"
                                className={clsx(
                                    "hover-underline-animation",
                                    pathName === "/blogs" &&
                                        "underline underline-offset-[5px] font-bold",
                                )}
                            >
                                <p>Blogs</p>
                            </Link>
                        </div>

                        <div className="flex items-center">
                            {isSmScreen ? (
                                <SearchIcon
                                    className="h-7 w-7"
                                    onClick={() => setBool(true)}
                                />
                            ) : (
                                <SearchBar icon={<FiSearch />} />
                            )}
                            <Link to={!currentUser ? "/auth" : "/profile"}>
                                <div className="hidden mx-2 sm:mx-4">
                                    <UserLoginLogo onClick={() => {}} />
                                </div>
                            </Link>
                            <Link to="/shop" className="relative hidden">
                                <ShoppingCart />
                            </Link>
                            <Link
                                to="/wishlist"
                                className="hidden ml-4 sm:ml-4"
                            >
                                <WishListIcon className="h-7 w-7" />
                            </Link>

                            <button className="ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? (
                                    <FiX className="h-7 w-7" />
                                ) : (
                                    <FiMenu className="h-7 w-7" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        onClick={() => setIsMobileMenuOpen(isMobileMenuOpen)}
                        className={clsx(
                            "text-white flex flex-col h-screen w-full bg-black fixed left-0 top-[5.5rem] items-center py-10 z-50 text-2xl transition-all duration-500",
                            isMobileMenuOpen
                                ? "translate-x-0"
                                : "translate-x-full",
                        )}
                    >
                        <Link to="/" className="w-full mb-3">
                            <p className="py-2 w-full text-center border border-white focus:bg-white hover:bg-white hover:text-black">
                                Home
                            </p>
                        </Link>
                        <Link to="/products" className="w-full mb-3">
                            <p className="py-2 w-full text-center border border-white focus:bg-white hover:bg-white hover:text-black">
                                Products
                            </p>
                        </Link>
                        <Link to="/about-us" className="w-full mb-3">
                            <p className="py-2 w-full text-center border border-white focus:bg-white hover:bg-white hover:text-black">
                                About us
                            </p>
                        </Link>
                        <Link to="/health-assesment" className="w-full mb-3">
                            <p className="py-2 w-full text-center border border-white focus:bg-white hover:bg-white hover:text-black">
                                Health Assesment
                            </p>
                        </Link>
                        <Link to="/blogs" className="w-full">
                            <p className="py-2 w-full text-center border border-white focus:bg-white hover:bg-white hover:text-black">
                                Blogs
                            </p>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="absolute w-full px-5 top-7 z-[999]">
                    <div className="relative">
                        <SearchBar inputClassName="w-full" />
                        <RxCross2
                            className="absolute top-[.35rem] right-[.35rem] h-5 w-5"
                            onClick={() => setBool(false)}
                        />
                    </div>
                </div>
            )}
            <Outlet />
        </>
    );
};

export default Navigation;
