import React, { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useLocation,
    Navigate,
} from "react-router-dom";
import clsx from "clsx";
import Authorization from "../routes/auth/auth.component";
import "../styles/Navbar.css";
import logo from "../images/logo.jpg";
import SearchPopup from "./SearchPopup";
import LoginForm from "./LoginForm";
import { ShoppingCart, UserLoginLogo } from "../utils/assets";
import { Strings } from "../utils/constants/Strings/Strings";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isAuthorizationOpen, setAuthorizationOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };

    const openAuthorization = () => {
        setAuthorizationOpen(true);
    };

    const closeAuthorization = () => {
        setAuthorizationOpen(false);
    };

    return (
        <nav className={clsx("navbar", isAuthorizationOpen ? "sticky" : "")}>
            <Link to="/" className="logo">
                <div
                    className="h-[2.75rem] w-[15rem] mt-1 navbar-image"
                    onClick={openAuthorization}
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
                    <Link to="/about-us">{Strings.ABOUT_US}</Link>
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
                <div onClick={openAuthorization} className="mx-4">
                    <UserLoginLogo className="cursor-pointer" />
                </div>
                <Link to="/" className="cart-icon">
                    <ShoppingCart />
                </Link>
            </div>
            {isAuthorizationOpen && (
                <div className="authorization-popup">
                    <Authorization onClose={closeAuthorization} />
                </div>
            )}
        </nav>
    );
};

const App = () => {
    const [isAuthorizationOpen, setAuthorizationOpen] = useState(false);

    const closeAuthorization = () => {
        setAuthorizationOpen(false);
    };

    return (
        <BrowserRouter>
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            {isAuthorizationOpen ? null : (
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

export default App;
