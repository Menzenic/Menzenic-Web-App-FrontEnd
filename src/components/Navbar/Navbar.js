import React, { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import "./Navbar.css";
import { ShoppingCart, UserLoginLogo, HeartIcon } from "../../utils/assets";
import { Strings } from "../../utils/constants/Strings/Strings";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
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
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/products" ? "active" : ""
                    }`}
                >
                    <Link to="/products" className="nav-link">
                        Products
                    </Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/about" ? "active" : ""
                    }`}
                >
                    <Link to="/about" className="nav-link">
                        {Strings.ABOUT_US}
                    </Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/healthassessment"
                            ? "active"
                            : ""
                    }`}
                >
                    <Link to="/healthassessment" className="nav-link">
                        {Strings.HEALTH_ASSESSMENT}
                    </Link>
                </li>
                <li
                    className={`nav-item nav-link ${
                        location.pathname === "/blogs" ? "active" : ""
                    }`}
                >
                    <Link to="/blogs" className="nav-link">
                        {Strings.BLOG_TITLE}
                    </Link>
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
                <Link to="/profile" className="wishlist-icon ml-4">
                    <HeartIcon />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
