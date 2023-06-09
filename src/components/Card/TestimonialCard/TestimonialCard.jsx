import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  const { rating, description, name, productImage, productName } = props;

  return (
    <div
      className="testimonial-card bg-white py-6 px-10 m-2 "
      style={{
        width: "511px",
        height: "303px",
        boxShadow: "19px 14px 77px rgba(0, 0, 0, 0.11)",
      }}
    >
      {rating && (
        <div className="testimonial-rating text-3xl font-bold mb-3">
          {rating}
        </div>
      )}
      {description ? (
        <p className="testimonial-description text-left">{description}</p>
      ) : (
        <p className="testimonial-text text-center">HEADING</p>
      )}
      <div className="testimonial-details mt-auto">
        <div className="testimonial-author text-right mt-3">
          <span className="author-name italic font-medium text-xs">{name}</span>
        </div>
        <hr className="testimonial-divider border border-gray-300 w-full my-6" />
        <div className="testimonial-product flex items-center justify-start">
          <img
            src={productImage}
            alt={productName}
            className="testimonial-image w-8 h-12 mr-2"
          />
          <span className="testimonial-product-name">{productName}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
