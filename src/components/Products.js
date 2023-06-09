import React, { useState } from "react";
import { WishListIcon } from "../utils/assets";
import ProductsData from "./ProductsData";
import { Strings } from "../utils/constants/Strings/Strings";
import { HomeProductCard } from "./Card";
import { LeftSliderArrow, RightSliderArrow } from "../utils/assets/svg";

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? ProductsData.length - 3 : prevSlide - 3
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= ProductsData.length - 3 ? 0 : prevSlide + 3
    );
  };

  const visibleProducts = ProductsData.slice(currentSlide, currentSlide + 3);

  return (
    <section className="products bg-white-100 py-5 min-h-[528px] relative">
      <h2 className="section-title text-4xl mt-3 font-medium text-black mb-0">
        {Strings.PRODUCTS_TITLE}
      </h2>
      <div className="flex items-center justify-center">
        <button
          className="slider-arrow slider-arrow-left absolute left-6 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          onClick={handlePreviousSlide}
        >
          <LeftSliderArrow />
        </button>
        <div className="flex justify-center overflow-x-auto">
          {visibleProducts.map((product, index) => (
            <div key={index} className="mr-10" style={{ minWidth: "18.77rem" }}>
              <HomeProductCard
                likeicon={<WishListIcon />}
                image={product.image}
                title={product.title}
                rate={product.price}
              />
            </div>
          ))}
        </div>
        <button
          className="slider-arrow slider-arrow-right absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          onClick={handleNextSlide}
        >
          <RightSliderArrow />
        </button>
      </div>
    </section>
  );
};

export default Products;
