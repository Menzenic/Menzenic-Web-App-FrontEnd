import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import clsx from "clsx";
import "../../utils/styles/styles.css";
import { MenzenicFullLogoBlack } from "../../utils";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 600);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <footer
            className={clsx(
                "bg-[#F0F0F0] pt-12 pb-8 sm:pb-16 px-9 sm:px-16 sm:pl-77 min-h-400",
                {
                    "text-center": isMobileScreen,
                }
            )}
        >
            <h1 className="text-left font-bold text-5xl text-black">
                Contact Us
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                {isMobileScreen && (
                    <div className="mt-8">
                        <h3 className="font-bold text-left text-2xl mb-4 text-black">
                            Quick Links
                        </h3>
                        <ul className="text-left">
                            <li className="my-2">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="my-2">
                                <Link to="/faqs">F.A.Q.s</Link>
                            </li>
                            <li className="my-2">
                                <Link to="/our-ingredients">
                                    Our Ingredients
                                </Link>
                            </li>
                            <li className="my-2">
                                <Link to="/products">Our Products</Link>
                            </li>
                            <li className="my-2">
                                <Link to="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="flex flex-col pl-0 sm:pl-6">
                    <div className="flex flex-col sm:flex-row justify-between my-10">
                        <div className="mr-10">
                            <h3 className="font-bold text-left text-2xl mb-4 text-black">
                                Visit Us
                            </h3>
                            <p className="text-left">2972 Westheimer Rd.</p>
                            <p className="text-left my-2">
                                Santa Ana, Illinois 85486
                            </p>
                        </div>
                        <div className="mt-8 sm:mt-0">
                            <h3 className="font-bold text-left text-2xl mb-4 text-black">
                                Contact
                            </h3>
                            <p className="text-left">contact@menzenic.com</p>
                            <p className="text-left my-2">+915654623164</p>
                        </div>
                    </div>
                    <div
                        className={clsx("flex items-center", {
                            "flex-col": isMobileScreen,
                            "items-end": !isMobileScreen,
                        })}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className={clsx(
                                "h-12 px-4 mr-0 sm:mr-2 box-border bg-gray-100 border border-black",
                                {
                                    "w-[380px]": isMobileScreen,
                                    "w-64": !isMobileScreen,
                                }
                            )}
                            style={{
                                width: isMobileScreen ? "100%" : "auto",
                            }}
                        />
                        <button
                            className="px-8 py-3 mt-4 sm:mt-0 w-full sm:w-36 h-12 text-white bg-black border border-black font-bold text-base leading-24 cursor-pointer"
                            style={{
                                width: isMobileScreen ? "300px" : "auto",
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {isMobileScreen && (
                    <div className="mt-8">
                        <h3 className="font-bold text-left text-2xl mb-4 text-black">
                            Customer Care
                        </h3>

                        <ul className="text-left">
                            <li className="my-2">
                                <Link to="/payment-methods">
                                    Payment Methods
                                </Link>
                            </li>
                            <li className="my-2">
                                <Link to="refund-return">
                                    Refunds and Returns
                                </Link>
                            </li>
                            <li className="my-2">
                                <Link to="/terms-conditions">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li className="my-2">
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="mt-8">
                    <MenzenicFullLogoBlack className=" h-[39px] w-[300px]" />
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-start mt-8 w-full mx-auto sm:pl-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook className="text-3xl mx-2" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter className="text-3xl mx-2" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="text-3xl mx-2" />
                </a>
                <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaPinterest className="text-3xl mx-2" />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube className="text-3xl mx-2" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
