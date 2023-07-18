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
import "../../utils/styles/styles.css";

const iconSize = {
    width: "99",
    height: "119",
};

const ProductQuality = () => {
    return (
        <div className="section-background-image min-h-[458px] py-16 text-center relative">
            <div className={clsx("w-full mx-auto px-4")}>
                <h2 className="text-[2.75rem] font-semibold text-white">
                    Our Brand Promises
                </h2>
                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-20">
                    {/* Icon 1 */}
                    <div className="flex flex-col items-center text-white">
                        <RabbitIcon className="h-[7.4375rem] w-[6.1875rem]" />
                        <span className="mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 2 */}
                    <div className="flex flex-col items-center text-white">
                        <TriangleIcon className="h-[7.3125rem] w-[6.1875rem]" />
                        <span className="mt-3 font-normal text-2xl leading-7 text-white">
                            Non Toxic
                        </span>
                    </div>

                    {/* Icon 3 */}
                    <div className="flex flex-col items-center text-white">
                        <EarthIcon className="h-[7.125rem] w-[5.5rem]" />
                        <span className="mt-3 font-normal text-2xl leading-7 text-white">
                            Environment Friendly
                        </span>
                    </div>

                    {/* Icon 4 */}
                    <div className="flex flex-col items-center text-white">
                        <HandIcon className="h-[7.125rem] w-[6.6875rem]" />
                        <span className="mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>

                    {/* Icon 5 */}
                    {/* <div className="flex flex-col items-center text-white">
                        <AtomIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className=" mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div> */}

                    {/* Icon 6 */}
                    {/* <div className="flex flex-col items-center text-white">
                        <LeafIcon className="h-[12.75rem] w-[10.313rem]" />
                        <span className=" mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductQuality;
