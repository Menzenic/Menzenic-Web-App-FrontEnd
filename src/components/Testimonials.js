import React, { useState } from "react"
import testimonialData from "./TestimonialData"
import { TestimonialCard } from "./Card"
import { LeftSliderArrow, RightSliderArrow } from "../utils/assets/svg"
import "../styles/Testimonials.css"

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? testimonialData.length - 2 : prevSlide - 1
        )
    }

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide >= testimonialData.length - 2 ? 0 : prevSlide + 1
        )
    }

    const visibleTestimonials = [
        testimonialData[currentSlide],
        testimonialData[currentSlide + 1],
    ]

    return (
        <section className="min-h-[638px]">
            <h2 className="text-5xl mt-12">Customer Testimonials</h2>
            <div className="flex w-full min-h-[500px] justify-between mt-10">
                <button
                    className="mx-8"
                    onClick={handlePreviousSlide}
                >
                    <LeftSliderArrow />
                </button>
                <div className="flex flex-wrap items-center w-[79.5rem] justify-between">
                    {visibleTestimonials.map((testimonial) => (
                        <TestimonialCard
                            rating={testimonial.rating}
                            description={
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            }
                            name={testimonial.name}
                            productImage={testimonial.productImage}
                            productName={testimonial.productName}
                        />
                    ))}
                </div>
                <button
                    className="mx-8"
                    onClick={handleNextSlide}
                >
                    <RightSliderArrow />
                </button>
            </div>
        </section>
    )
}

export default Testimonials
