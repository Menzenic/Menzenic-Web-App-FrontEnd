import React from "react";
import clsx from "clsx";
import {
    RabbitIcon,
    TriangleIcon,
    HandIcon,
    AtomIcon,
    EarthIcon,
    LeafIcon,
} from "../../utils/assets";

import "./ProductQuality.css";

const ProductQuality = () => {
    return (
        <div className="product-quality min-h-[638px] bg-cover bg-no-repeat py-16 text-center relative">
            <div className={clsx("w-full mx-auto px-4")}>
                <h2 className="product-quality-title text-5xl font-normal text-white">
                    Our Brand Promises
                </h2>
                <div className="mt-20 p-4 grid grid-cols-3 gap-20">
                    {/* Icon 1 */}
                    <div className="flex flex-col items-center text-white">
                        <RabbitIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className="mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 2 */}
                    <div className="flex flex-col items-center text-white">
                        <TriangleIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className="mt-3 font-normal text-2xl leading-7 text-white">
                            Non Toxic
                        </span>
                    </div>

                    {/* Icon 3 */}
                    <div className="flex flex-col items-center text-white">
                        <HandIcon className="h-[13.75rem] w-[10.313rem]" />
                        <span className="font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>

                    {/* Icon 4 */}
                    <div className="flex flex-col items-center text-white">
                        <AtomIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className=" mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 5 */}
                    <div className="flex flex-col items-center text-white">
                        <EarthIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className="mt-4 font-normal text-2xl leading-7 text-white">
                            Environment Friendly
                        </span>
                    </div>

                    {/* Icon 6 */}
                    <div className="flex flex-col items-center text-white">
                        <LeafIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className=" mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>
                </div>
            </div>
            {/* <img
                src={productQualityImg}
                alt="product quality img"
                className="product-quality-image absolute top-0 right-0 h-full w-1/3 z-[-10]"
            /> */}
        </div>
    );
};

export default ProductQuality;
