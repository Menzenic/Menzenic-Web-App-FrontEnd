import React from "react";
import productQualityImg from "../../images/blogsbackground.png";
import {
    RabbitIcon,
    TriangleIcon,
    HandIcon,
    AtomIcon,
    EarthIcon,
    LeafIcon,
} from "../../utils/assets";
import clsx from "clsx";
import "./ProductQuality.css";
import "../../utils/styles/styles.css";

const iconSize = {
    width: "99",
    height: "119",
};

const ProductQuality = () => {
    return (
        <div className="product-quality bg-gradient-to-r from-black via-gray-700 to-transparent bg-contain bg-right bg-no-repeat text-center relative">
            <div className={clsx("max-w-6xl mx-auto px-4")}>
                <h2 className="product-quality-title mt-0 mb-10 heading font-normal text-white">
                    Our Brand Promises
                </h2>
                <div className="product-quality-icons p-6 grid grid-cols-3 gap-14 items-stretch">
                    {/* Icon 1 */}
                    <div className="product-quality-icon flex flex-col items-center justify-center text-white">
                        <RabbitIcon
                            width={iconSize.width}
                            height={iconSize.height}
                            className="product-quality-icon-image w-2/3 h-auto"
                        />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 2 */}
                    <div className="product-quality-icon flex flex-col items-center justify-center text-white h-full">
                        <TriangleIcon
                            width={iconSize.width}
                            height={iconSize.height}
                            className="product-quality-icon-image w-2/3 h-auto"
                        />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            Non Toxic
                        </span>
                    </div>

                    {/* Icon 3 */}
                    <div className="product-quality-icon flex flex-col items-center justify-center text-white h-full">
                        <HandIcon
                            width={iconSize.width}
                            height={iconSize.height}
                            className="product-quality-icon-image w-2/3 h-auto"
                        />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>

                    {/* Icon 4 */}
                    <div className="product-quality-icon flex flex-col items-center justify-center text-white">
                        <AtomIcon
                            width={iconSize.width}
                            height={iconSize.height}
                            className="product-quality-icon-image w-2/3 h-auto"
                        />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 5 */}
                    <div className="product-quality-icon flex flex-col items-center justify-center text-white">
                        <EarthIcon
                            width={iconSize.width}
                            height={iconSize.height}
                            className="product-quality-icon-image w-2/3 h-auto"
                        />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            Environment Friendly
                        </span>
                    </div>

                    {/* Icon 6 */}
                    <div className="product-quality-icon flex flex-col items-center justify-center text-white h-full">
                        <LeafIcon
                            width={iconSize.width}
                            height={iconSize.height}
                            className="product-quality-icon-image w-2/3 h-auto"
                        />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>
                </div>
            </div>
            <img
                src={productQualityImg}
                alt="product quality img"
                className="product-quality-image absolute h-full w-full z-[-10]"
            />
        </div>
    );
};

export default ProductQuality;
