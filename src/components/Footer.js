import React from "react";
import "../styles/Footer.css";
import logoImage from "../images/main_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">Contact Us</h1>
      <div className="left-section">
        <div className="footer-section">
          <h3 className="footer-section-title">Visit Us</h3>
          <ul className="footer-links">
            <li>Location</li>
            <li>Opening Hours</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact</h3>
          <ul className="footer-links">
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Subscribe</h3>
          <div className="email-subscription">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={logoImage} alt="Logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
