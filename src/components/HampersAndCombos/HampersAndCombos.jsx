import React from "react";
import HampersBg from "../../utils/assets/png/hampers_bg.png";
import HampersImage from "../../utils/assets/png/hampers_image.png";
import "../../utils/styles/styles.css";

const ImageCard = () => (
    <div
        className="w-[296px] h-[344px] border-[1px] border-white rounded-2xl overflow-hidden mx-5 my-10 relative z-10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        style={{
            boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
        }}
    >
        <div className="p-4">
            <img
                src={HampersImage}
                alt="Hampers and Combo"
                className="w-full h-full object-cover rounded-xl"
            />
        </div>
    </div>
);

const HampersAndCombos = () => {
    return (
        <div
            className="py-8 text-center min-h-[365px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${HampersBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <h1 className="relative z-10 text-white label-arial  text-3xl sm:text-4xl font-bold my-2">
                Hampers & Combos
            </h1>
            <div className="flex flex-wrap justify-around">
                <div className="sm:w-auto flex justify-center">
                    <ImageCard />
                </div>
                <div className="sm:w-auto flex justify-center">
                    <ImageCard />
                </div>
                <div className="sm:w-auto flex justify-center">
                    <ImageCard />
                </div>
            </div>
        </div>
    );
};

export default HampersAndCombos;
