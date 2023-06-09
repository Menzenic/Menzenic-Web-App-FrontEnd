import React, { useState } from "react";
import testimonialData from "./TestimonialData";
import "../styles/Testimonials.css";
import { HomeTestimonialCard } from "./Card";
import LeftSliderArrow from "../utils/assets/svg/LeftSliderArrow";
import RightSliderArrow from "../utils/assets/svg/RightSliderArrow";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialData.length - 2 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= testimonialData.length - 2 ? 0 : prevSlide + 1
    );
  };

  const visibleTestimonials = [
    testimonialData[currentSlide],
    testimonialData[currentSlide + 1],
  ];

  return (
    <section className="testimonials bg-white-100 py-5 min-h-[528px]">
      <h2 className="section-title text-4xl mt-3 font-medium text-black mb-0">
        Customer Testimonials
      </h2>
      <div className="slider-container mt-5 flex items-center overflow-x-auto relative">
        <button
          className="slider-arrow slider-arrow-left absolute left-6 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          onClick={handlePreviousSlide}
        >
          <LeftSliderArrow />
        </button>
        <div className="slider-content-container mx-2 sm:mx-8 w-full flex items-center justify-center min-h-[500px] gap-4">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-container">
              <HomeTestimonialCard
                rating={testimonial.rating}
                description={testimonial.description}
                name={testimonial.name}
                productImage={testimonial.productImage}
                productName={testimonial.productName}
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

export default Testimonials;
