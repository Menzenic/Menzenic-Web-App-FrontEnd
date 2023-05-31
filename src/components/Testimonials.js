// Testimonials.js
import React from "react";
import TestimonialData from "./TestimonialData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} testimonial-arrow prev-arrow`}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} testimonial-arrow next-arrow`}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="testimonials">
      <h1>What people say about Us</h1>
      <Slider {...settings}>
        {TestimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.img} alt={testimonial.name} />
            <p>{testimonial.description}</p>
            <div className="testimonial-info">
              <span>{testimonial.rating}</span>
              <span>{testimonial.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
