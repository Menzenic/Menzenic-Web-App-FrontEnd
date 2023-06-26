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
import "../../utils/styles/styles.css";

const iconSize = {
    width: "77px",
    height: "93px",
};

const OurProduct = () => {
    return (
        <div className="text-center relative p-8">
            <div className={clsx("max-w-full px-8")}>
                <h2 className="text-4xl label-arial text-left text-white">
                    Our Product
                </h2>
                <div className="grid grid-cols-6 gap-6 py-8">
                    {/* Icon 1 */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <RabbitIcon
                            width={iconSize.width}
                            height={iconSize.height}
                        />
                        <span className="icon-label mt-3 font-normal text-base leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 2 */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <TriangleIcon
                            width={iconSize.width}
                            height={iconSize.height}
                        />
                        <span className="icon-label mt-3 font-normal text-base leading-7 text-white">
                            Non Toxic
                        </span>
                    </div>

                    {/* Icon 3 */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <HandIcon
                            width={iconSize.width}
                            height={iconSize.height}
                        />
                        <span className="icon-label mt-3 font-normal text-base leading-7 text-white">
                            100% Natural
                        </span>
                    </div>

                    {/* Icon 4 */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <AtomIcon
                            width={iconSize.width}
                            height={iconSize.height}
                        />
                        <span className="icon-label mt-3 font-normal text-base leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 5 */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <EarthIcon
                            width={iconSize.width}
                            height={iconSize.height}
                        />
                        <span className="icon-label mt-3 font-normal text-base leading-7 text-white">
                            Environment Friendly
                        </span>
                    </div>

                    {/* Icon 6 */}
                    <div className="flex flex-col items-center justify-center text-white">
                        <LeafIcon
                            width={iconSize.width}
                            height={iconSize.height}
                        />
                        <span className="icon-label mt-3 font-normal text-base leading-7 text-white">
                            100% Natural
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProduct;
