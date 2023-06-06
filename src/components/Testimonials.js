import React, { useState } from "react";
import testimonialData from "./TestimonialData";
import { HomeTestimonialCard } from "./Card";
import { LeftSliderArrow, RightSliderArrow } from "../utils/assets/svg";
import "../styles/Testimonials.css";

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
    <section className="testimonials">
      <h2 className="section-title">Customer Testimonials</h2>
      <div className="slider-container">
        <button
          className="slider-arrow slider-arrow-left"
          onClick={handlePreviousSlide}
        >
          <LeftSliderArrow />
        </button>
        <div className="testimonials-list">
          {visibleTestimonials.map((testimonial) => (
            <HomeTestimonialCard
              rating={testimonial.rating}
              description={testimonial.description}
              name={testimonial.name}
              productImage={testimonial.productImage}
              productName={testimonial.productName}
            />
          ))}
        </div>
        <button
          className="slider-arrow slider-arrow-right"
          onClick={handleNextSlide}
        >
          <RightSliderArrow />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
