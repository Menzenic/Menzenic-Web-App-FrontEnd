import React from "react";
import "../styles/Footer.css";
import logoImage from "../images/main_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">Contact Us</h1>
      <div className="footer-content">
        <div className="left-section">
          <div className="left-section-top">
            <div className="footer-section">
              <h3 className="footer-section-title">Visit Us</h3>
              <p className="footer-setion-title-para">2972 Westheimer Rd. </p>
              <p className="footer-setion-title-paras">
                Santa Ana, Illinois 85486
              </p>
            </div>
            <div className="footer-section">
              <h3 className="footer-section-title">Contact</h3>
              <p className="footer-setion-title-para">contact@menzenic.com </p>
              <p className="footer-setion-title-paras">+915654623164</p>
            </div>
          </div>
          <div className="left-section-bottom">
            <div className="footer-section">
              <div className="email-subscription">
                <input type="email" placeholder="Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <h1 className="footer-logo">Menzenic</h1>
          {/* <div className="footer-section-img">
            <img src={logoImage} alt="Logo" className="footer-logo" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
