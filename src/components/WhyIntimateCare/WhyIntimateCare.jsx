import React from "react";
import "../../utils/styles/styles.css";
import { SmileIcon, LikeIcon, HeartBeatIcon } from "../../utils/assets/svg";

const WhyIntimateCare = () => {
    return (
        <div className="p-4 min-h-[658px] mt-14">
            <h2 className="text-4xl font-bold label-arial text-center">
                Why Intimate Care Is Important?
            </h2>
            <p className="text-2xl label-arial text-center mt-9 px-4 sm:px-44">
                Neglecting intimate hygiene risks infections and discomfort.
                Prioritize it to maintain a healthy genital area and overall
                well-being.
            </p>
            <div className="flex justify-center mt-14 p-4 sm:p-16 flex-wrap">
                <div
                    className="w-full sm:w-[297px] h-[275px] bg-white mx-2 sm:mx-8 my-10 sm:my-0 relative rounded-[19px] transition-all duration-300 transform hover:scale-105"
                    style={{
                        boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
                    }}
                >
                    <div className="absolute top-[-52px] left-0 right-0 flex justify-center items-end">
                        <div className="w-[134px] h-[134px] bg-black rounded-full flex items-center justify-center">
                            <SmileIcon />
                        </div>
                    </div>
                    <div className="p-4 absolute bottom-10 left-0 right-0 text-center">
                        <p className="text-base label-arial">
                            Poor intimate hygiene can have lasting health
                            implications, paving the way for the development of
                            grave illnesses if disregarded.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full sm:w-[297px] h-[275px] bg-white mx-2 sm:mx-8  my-14 sm:my-8 relative rounded-[19px] transition-all duration-300 transform hover:scale-105 mt-8 sm:mt-0"
                    style={{
                        boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
                    }}
                >
                    <div className="absolute top-[-52px] left-0 right-0 flex justify-center items-end">
                        <div className="w-[134px] h-[134px] bg-black rounded-full flex items-center justify-center">
                            <LikeIcon />
                        </div>
                    </div>
                    <div className="p-4 absolute bottom-10 left-0 right-0 text-center">
                        <p className="text-base label-arial">
                            Opting for the right intimate care products can
                            strengthen your immune system and elevate your sense
                            of confidence.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full sm:w-[297px] h-[275px] bg-white mx-2 sm:mx-8 my-10 sm:my-8 relative rounded-[19px] transition-all duration-300 transform hover:scale-105 mt-8 sm:mt-0"
                    style={{
                        boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
                    }}
                >
                    <div className="absolute top-[-52px] left-0 right-0 flex justify-center items-end">
                        <div className="w-[134px] h-[134px] bg-black rounded-full flex items-center justify-center">
                            <HeartBeatIcon />
                        </div>
                    </div>
                    <div className="p-4 absolute bottom-6 left-0 right-0 text-center">
                        <p className="text-base label-arial">
                            Practising good intimate hygiene not only boosts
                            confidence, reduces discomfort, and prevents
                            infections, but also improves intimacy and supports
                            erectile health.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyIntimateCare;
