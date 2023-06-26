import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HealthChatbot from "../HealthChatbot/HealthChatbot.jsx";
import "../../utils/styles/styles.css";

const HealthAssessment = () => {
    const navigate = useNavigate();
    const [showChatbot, setShowChatbot] = useState(false);

    const handleButtonClick = () => {
        setShowChatbot(true);
        navigate("/healthassessment");
    };

    if (showChatbot) {
        return <HealthChatbot />;
    }

    return (
        <div className="min-h-[438px] relative newpage-container">
            <div
                className="h-[670px] bg-no-repeat assessment-image"
                style={{ backgroundPosition: "right" }}
            ></div>

            <div className="absolute top-64 left-20">
                <div className="text-5xl text-white text-left label-arial leading-10">
                    <p>Expert designed solutions</p>
                    <p className="my-8 font-bold">80% Success Rate</p>
                </div>
                <button
                    className="hover:cursor-pointer mt-12 w-[8.1rem] h-[2.438rem] flex justify-between items-center px-3 rounded-sm"
                    style={{
                        background:
                            "linear-gradient(270.37deg,#f9f9f9 -29.27%, rgba(249, 249, 249, 0) 191.25%",
                    }}
                    onClick={handleButtonClick}
                >
                    <p className="text-lg">Let's Begin</p>
                    <div className="shop-arrow right"></div>
                </button>
            </div>
        </div>
    );
};

export default HealthAssessment;
