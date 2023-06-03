import React, { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import clsx from "clsx";

import "../styles/Navbar.css";
import logo from "../images/logo.jpg";
import SearchPopup from "./SearchPopup";
import LoginForm from "./LoginForm";
import { UserLoginLogo } from "../utils/assets";
import { ShoppingCart } from "../utils/assets";
import { Strings } from "../utils/constants/Strings/Strings";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLoginFormClose = () => {
    setLoginOpen(false);
  };

  const toggleLoginForm = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
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
      </ul>
      <div className="nav-actions">
        <div
          className="search-bar"
          style={{
            position: "relative",
          }}
        >
          <FiSearch
            style={{
              position: "absolute",
              left: 2,
              top: "5px",
              color: "black",
            }}
          />
          <input
            placeholder="Search"
            style={{
              paddingLeft: "20px",
            }}
          />
          {/* <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            /> 
          </div> */}
        </div>
        <UserLoginLogo
          onClick={() => console.log("USER LOGIN")}
          className="login_logo"
        />
        <Link to="/" className="cart-icon">
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
