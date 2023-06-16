import React from "react";
import productQualityImg from "../../images/image.png";
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

const ProductQuality = () => {
    return (
        <div className="product-quality bg-gradient-to-r from-black via-gray-700 to-transparent bg-contain bg-right bg-no-repeat py-16 text-center relative">
            <div className={clsx("max-w-4xl mx-auto px-4")}>
                <h2 className="product-quality-title mt-0 mb-10 text-5xl font-normal text-white">
                    Our Products Are
                </h2>
                <div className="product-quality-icons p-4 grid grid-cols-3 gap-10">
                    {/* Icon 1 */}
                    <div className="product-quality-icon flex flex-col items-center text-white">
                        <RabbitIcon className="product-quality-icon-image w-2/3 h-auto" />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 2 */}
                    <div className="product-quality-icon flex flex-col items-center text-white">
                        <TriangleIcon className="product-quality-icon-image w-2/3 h-auto" />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            Non Toxic
                        </span>
                    </div>

                    {/* Icon 3 */}
                    <div className="product-quality-icon flex flex-col items-center text-white">
                        <HandIcon className="product-quality-icon-image w-2/3 h-auto" />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>

                    {/* Icon 4 */}
                    <div className="product-quality-icon flex flex-col items-center text-white">
                        <AtomIcon className="product-quality-icon-image w-2/3 h-auto" />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            No animal testing
                        </span>
                    </div>

                    {/* Icon 5 */}
                    <div className="product-quality-icon flex flex-col items-center text-white">
                        <EarthIcon className="product-quality-icon-image w-2/3 h-auto" />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            Non Toxic
                        </span>
                    </div>

                    {/* Icon 6 */}
                    <div className="product-quality-icon flex flex-col items-center text-white">
                        <LeafIcon className="product-quality-icon-image w-2/3 h-auto" />
                        <span className="icon-label mt-3 font-normal text-2xl leading-7 text-white">
                            100% Natural
                        </span>
                    </div>
                </div>
            </div>
            <img
                src={productQualityImg}
                alt="product quality img"
                className="product-quality-image absolute top-0 right-0 h-full w-1/3 z-[-10]"
            />
        </div>
    );
};

export default ProductQuality;
