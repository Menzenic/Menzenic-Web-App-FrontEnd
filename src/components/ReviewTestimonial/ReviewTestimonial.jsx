import React from "react";
import clsx from "clsx";

const ReviewTestimonial = (props) => {
    return (
        <div
            className={clsx(
                "min-h-[177px] w-[521px] shadow-2xl flex flex-col",
                props.reviewTestimonialBg
            )}
        >
            {props.rating && (
                <div className="mt-10 w-full justify-center text-center text-2xl">
                    {props.rating}
                </div>
            )}
            {props.description && (
                <div className="w-full mt-7 flex justify-center">
                    <p className="w-[26.938rem] max-h-[4.5rem] overflow-auto">
                        {props.description}
                    </p>
                </div>
            )}
            <div className="flex w-full justify-center mt-6 px-20">
                <div className="border border-[#CECECE] w-full"></div>
            </div>

            <div className="w-full flex pl-16 my-5">
                {props.date && (
                    <p className="mt-7 w-full flex justify-start pr-16 text-right">
                        {props.date}
                    </p>
                )}
                {props.name && (
                    <p className="mt-7 w-full flex justify-end pr-16 text-left">
                        {props.name}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ReviewTestimonial;
