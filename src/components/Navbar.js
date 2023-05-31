import React, { useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/menzenic_logo.png";
import SearchPopup from "./SearchPopup";
import LoginForm from "./LoginForm";
import { UserLoginLogo } from "../utils/assets";

const Navbar = () => {
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
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <div className="search-bar">
            <span className="search-icon">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <UserLoginLogo
            onClick={() => console.log("USER LOGIN")}
            className=""
          />
          <Link to="/" className="cart-icon">
            <FiShoppingCart />
          </Link>
        </div>
      </nav>

      {isSearchOpen && <SearchPopup searchValue={searchValue} />}

      {isLoginOpen && <LoginForm onClose={handleLoginFormClose} />}

      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
