import React from "react";
import { FiX } from "react-icons/fi";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import "../../utils/styles/styles.css";

const HealthChatbot = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/healthassessment");
    };

    return (
        <section className="newpage-container p-16 flex justify-center items-center">
            <div className="w-[980px] h-[550px] rounded-2xl bg-white relative">
                <h2 className="absolute label-arial text-lg top-4 left-8 font-bold">
                    Health Assessment
                </h2>
                <button
                    className="absolute top-4 right-4"
                    onClick={handleClose}
                >
                    <FiX size={24} className="text-black hover:text-gray-500" />
                </button>
                <hr
                    className={clsx(
                        "absolute top-10 left-0 right-0 mt-6",
                        "bg-[rgba(230, 230, 230, 1)] border-2"
                    )}
                />
            </div>
        </section>
    );
};

export default HealthChatbot;
