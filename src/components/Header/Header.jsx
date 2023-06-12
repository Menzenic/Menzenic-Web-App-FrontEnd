import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
    return (
        <div className="min-h-[638px] relative">
            {/* <Navbar /> */}
            <div className="h-[750px] header-image"></div>
            <div className="absolute top-96 left-12">
                <div className="text-5xl text-white text-left font-light font-['Arial'] leading-10">
                    <p>When it comes to your body,</p>
                    <p className="mt-3"> cleanliness is key</p>
                </div>
                <div
                    className="hover:cursor-pointer mt-6 w-[8.1rem] h-[2.438rem] flex justify-between items-center px-3 rounded-sm"
                    style={{
                        background:
                            "linear-gradient(270.37deg,#f9f9f9 -29.27%, rgba(249, 249, 249, 0) 191.25%",
                    }}
                >
                    <p className="text-lg">Shop Now</p>
                    <div className="shop-arrow right"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
