import React, { useState } from "react";
import clsx from "clsx";
import { LeftSliderArrow, RightSliderArrow } from "../../utils/assets";
import { TestimonialCard } from "../Card";
import testimonialData from "../../data/TestimonialData";
import ReviewTestimonial from "../ReviewTestimonial/ReviewTestimonial";

const CurtomerReview = () => {
    const testimonialCount = 2;
    const [currentSlide, setCurrentSlide] = useState(0);
    const visibleTestimonials = testimonialData.slice(
        currentSlide,
        currentSlide + testimonialCount
    );

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - testimonialCount);
    };

    return (
        <div className="product-review-section px-20">
            <h1 className="text-white text-4xl mb-5">Customer Review</h1>
            <div className="horizontal-line h-px mx-auto"></div>
            <div className="customer-review-top flex justify-between pt-8">
                <div className="review-left items-start">
                    <h1 className="text-4xl text-white">5</h1>
                    <p className="text-4xl text-white">★★★★★</p>
                    <button
                        className={clsx(
                            "border bg-white rounded-md px-4 py-2",
                            "hover:bg-black hover:text-white",
                            "transition-all duration-200 mt-4"
                        )}
                    >
                        Write a Review
                    </button>
                </div>
                <div className="review-right p-4 text-white">
                    <div className="stripe-1 flex items-center">
                        <div className="given-rating flex mr-5">
                            <p className="text-2xl mr-2">★</p>
                            <p className="text-2xl">5</p>
                        </div>
                        <div className="review-line"></div>
                        <p className="no-users ml-4">8</p>
                    </div>
                    <div className="stripe-2 flex items-center">
                        <div className="given-rating flex mr-5">
                            <p className="text-2xl mr-2">★</p>
                            <p className="text-2xl">4</p>
                        </div>
                        <div className="review-line">
                            <div
                                className="review-line-fill"
                                style={{
                                    width: `${(8 / 10) * 100}%`, // Adjust the width calculation based on the number of users
                                }}
                            ></div>
                        </div>
                        <p className="no-users ml-4">2</p>
                    </div>
                    <div className="stripe-3 flex items-center">
                        <div className="given-rating flex mr-5">
                            <p className="text-2xl mr-2">★</p>
                            <p className="text-2xl">3</p>
                        </div>
                        <div className="review-line"></div>
                        <p className="no-users ml-4">0</p>
                    </div>
                    <div className="stripe-4 flex items-center">
                        <div className="given-rating flex mr-5">
                            <p className="text-2xl mr-2">★</p>
                            <p className="text-2xl">2</p>
                        </div>
                        <div className="review-line"></div>
                        <p className="no-users ml-4">0</p>
                    </div>
                    <div className="stripe-5 flex items-center">
                        <div className="given-rating flex mr-5">
                            <p className="text-2xl mr-2">★</p>
                            <p className="text-2xl">1</p>
                        </div>
                        <div className="review-line"></div>
                        <p className="no-users ml-4">0</p>
                    </div>
                </div>
            </div>
            <div className="review-bottom">
                <h2 className="label arial text-xl text-white">
                    Showing Reviews
                </h2>
                <div className="flex w-full min-h-[500px] justify-between">
                    <button className="mx-8" onClick={handlePreviousSlide}>
                        <LeftSliderArrow />
                    </button>
                    <div className="flex">
                        {visibleTestimonials.map((reviewTestimonial) => (
                            <div className="p-2" key={reviewTestimonial.id}>
                                <ReviewTestimonial
                                    rating={reviewTestimonial.rating}
                                    description={reviewTestimonial.description}
                                    name={reviewTestimonial.name}
                                    date={reviewTestimonial.date}
                                    reviewTestimonialBg="bg-white text-black"
                                />
                            </div>
                        ))}
                    </div>
                    <button className="mx-8" onClick={handlePreviousSlide}>
                        <RightSliderArrow />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CurtomerReview;
