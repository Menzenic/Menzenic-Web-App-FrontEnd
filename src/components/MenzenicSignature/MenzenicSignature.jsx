import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import VectorImage from "../../images/Pngs/Vector.png";

const MenzenicSignature = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about-us");
    };

    return (
        <div
            className="px-8 text-center min-h-[365px]"
            style={{
                backgroundImage: `url(${VectorImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 80px) 80%",
            }}
        >
            <div className="flex justify-center text-center items-center">
                <h1 className="footer-logo mt-12">Menzenic</h1>
            </div>
            <p className="label-arial text-xl font-bold mt-12 mb-2 px-20">
                Menzenic is more than a collection of products, here we believe
                it is a celebration to be a modern man in today's world. We are
                here to inspire and empower you on your journey towards becoming
                the best version of yourself by taking care of all your intimate
                (hygiene) needs.
            </p>
            <button
                className={clsx(
                    "border border-black rounded-md px-8 py-2 mt-2",
                    "bg-[#0D0A0A] text-white",
                    "transition-all duration-200 hover:bg-white hover:text-black"
                )}
                onClick={handleClick}
            >
                More About Us
            </button>
        </div>
    );
};

export default MenzenicSignature;
