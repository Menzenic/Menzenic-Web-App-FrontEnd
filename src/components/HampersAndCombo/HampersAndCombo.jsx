import React from "react";
import HampersBg from "../../utils/assets/png/hampers_bg.png";
import HampersImage from "../../utils/assets/png/hampers_image.png";
import "../../utils/styles/styles.css";

const ImageCard = () => (
    <div className="w-[296px] h-[344px] border-[1px] border-white rounded-lg overflow-hidden m-10 relative z-10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <img
            src={HampersImage}
            alt="Hampers and Combo"
            className="w-full h-full object-cover p-4"
        />
    </div>
);

const HampersAndCombo = () => {
    return (
        <div
            className="p-8 text-center min-h-[365px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${HampersBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <h1 className="relative z-10 text-white label-arial text-4xl font-bold my-2">
                Hampers & Combo
            </h1>
            <div className="flex flex-wrap justify-center ">
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

export default HampersAndCombo;
