import React, { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import "./Navbar.css";
import { ShoppingCart, UserLoginLogo } from "../../utils/assets";
import { Strings } from "../../utils/constants/Strings/Strings";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };

    const openLoginInSameTab = () => {
        navigate("/login");
    };

    return (
        <nav className={clsx("navbar")}>
            <Link to="/" className="logo">
                <div
                    className="h-[2.75rem] w-[15rem] mt-1 navbar-image"
                    onClick={() => navigate("/")}
                ></div>
            </Link>
            <button
                className={clsx("menu-toggle", isMenuOpen ? "open" : "")}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/" ? "active" : ""
                    }`}
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/products" ? "active" : ""
                    }`}
                >
                    <Link to="/products">Products</Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/about-us" ? "active" : ""
                    }`}
                >
                    <Link to="/about">{Strings.ABOUT_US}</Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/blogs" ? "active" : ""
                    }`}
                >
                    <Link to="/blogs">{Strings.BLOG_TITLE}</Link>
                </li>
            </ul>
            <div className="mr-5 flex items-center">
                <SearchBar icon={<FiSearch />} />
                <div className="mx-4">
                    <UserLoginLogo
                        className="cursor-pointer"
                        onClick={openLoginInSameTab}
                    />
                </div>
                <Link to="/cart" className="cart-icon">
                    <ShoppingCart />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
