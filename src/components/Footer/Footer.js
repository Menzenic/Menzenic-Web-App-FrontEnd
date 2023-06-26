import React from "react";
import "./Footer.css";
import clsx from "clsx";

// import logoImage from "../images/main_logo.png";

const Footer = () => {
    return (
        <footer className={clsx("footer pt-12 pb-16 px-16 sm:pl-77 min-h-400")}>
            <h1 className="footer-title text-left font-bold font-Arial text-5xl text-black">
                Contact Us
            </h1>
            <div className="footer-content flex justify-between items-start">
                <div className="left-section flex flex-col pl-6">
                    <div className="left-section-top flex justify-between my-10">
                        <div className="footer-section mr-20">
                            <h3 className="footer-section-title font-bold text-left text-2xl mb-4 text-black">
                                Visit Us
                            </h3>
                            <p className="footer-para text-left">
                                2972 Westheimer Rd.
                            </p>
                            <p className="footer-paras text-left my-2">
                                Santa Ana, Illinois 85486
                            </p>
                        </div>
                        <div className="footer-section">
                            <h3 className="footer-section-title font-bold text-left text-2xl mb-4 text-black">
                                Contact
                            </h3>
                            <p className="footer-para text-left">
                                contact@menzenic.com
                            </p>
                            <p className="footer-paras text-left my-2">
                                +915654623164
                            </p>
                        </div>
                    </div>
                    <div className="left-section-bottom">
                        <div className="footer-section">
                            <div className="email-subscription flex items-center">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-64 h-12 px-4 mr-2 box-border bg-gray-100 border border-black"
                                />
                                <button className="px-8 py-3 w-36 h-12 text-white bg-black border border-black font-bold text-base leading-24 cursor-pointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section flex justify-end items-center  h-150">
                    <h1 className="footer-logo my-16">Menzenic</h1>

                    {/* <div className="footer-section-img">
            <img src={logoImage} alt="Logo" className="footer-logo" />
          </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
