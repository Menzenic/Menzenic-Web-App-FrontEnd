import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
import backgroundImage from "../images/header_bg.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Strings } from "../utils/constants/Strings/Strings";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header-content">
        <div className="left-content">
          <h1 className="heading">{Strings.HEADER_TITLE}</h1>
          <button className="shop-now-button">
            <span className="shop-now-text">Shop now</span>
            <FaChevronRight className="greater-symbol" />
          </button>
        </div>
        <div className="right-content">
          <img src={backgroundImage} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default Header;
