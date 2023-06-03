import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import testimonialData from "./TestimonialData";
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
          <FaChevronLeft />
        </button>
        <div className="testimonials-list">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">{testimonial.description}</p>
              <div className="testimonial-details">
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.name}</span>
                </div>
                <hr className="testimonial-divider" />
                <div className="testimonial-product">
                  <img
                    src={testimonial.productImage}
                    alt={testimonial.productName}
                    className="testimonial-image"
                  />
                  <span className="testimonial-product-name">
                    {testimonial.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="slider-arrow slider-arrow-right"
          onClick={handleNextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
