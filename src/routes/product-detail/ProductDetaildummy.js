import React, { useState } from "react";
import clsx from "clsx";
import { ProductCard, TestimonialCard } from "../../components/Card";
import ProductsData from "../../data/ProductsData";
import { LeftSliderArrow, RightSliderArrow } from "../../utils/assets";
import { WishListIcon } from "../../utils/assets";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../utils/styles/styles.css";
import testimonialData from "../../data/TestimonialData";

const ProductDetail = () => {
    const { id } = useParams();
    const visibleProducts = ProductsData.slice(0, 3);

    const testimonialCount = 2;
    const [currentSlide, setCurrentSlide] = useState(0);
    const visibleTestimonials = testimonialData.slice(
        currentSlide,
        currentSlide + testimonialCount
    );

    // Fetch the product details based on the ID
    // Modify this part according to your data-fetching logic
    const fetchProductDetails = () => {
        // Replace this with your own implementation or API call
        return {
            title: "Product Title",
            price: 10.99,
            image: "product-image.jpg",
        };
    };

    const product = fetchProductDetails(id);

    // Handle cases where the product is not found or the data is still loading
    if (!product) {
        return <div>Loading...</div>;
    }

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - testimonialCount);
    };

    return (
        <div className="product-detail">
            <div className="product-detail-section newpage-container">
                <div className="product-detail-container text-white">
                    <h2>This is Product Detail Section</h2>
                    <h3>Product Title: {product.title}</h3>
                    <p>Product Price: {product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-review-section">
                    <h1 className="text-white text-4xl">Customer Review</h1>
                    <div className="horizontal-line h-px mx-auto"></div>
                    <div className="customer-review-top flex">
                        <div className="review-left">
                            <h1 className="text-4xl text-white">5</h1>
                            <p className="text-4xl text-white">★★★★★</p>
                            <button
                                className={clsx(
                                    "border bg-white rounded-md px-4 py-2",
                                    "hover:bg-black hover:text-white",
                                    "transition-all duration-200"
                                )}
                            >
                                Write a Review
                            </button>
                        </div>
                        <div className="review-right">
                            <h2>review stripes should be come</h2>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <h2 className="label arial text-4xl text-white">
                            Showing Reviews
                        </h2>
                        <div className="flex w-full min-h-[500px] justify-between">
                            <button
                                className="mx-8"
                                onClick={handlePreviousSlide}
                            >
                                <LeftSliderArrow />
                            </button>
                            <div className="grid text-white grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                                {visibleTestimonials.map((testimonial) => (
                                    <div className="p-2" key={testimonial.id}>
                                        <TestimonialCard
                                            rating={testimonial.rating}
                                            description={
                                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                            }
                                            name={testimonial.name}
                                            productName={
                                                testimonial.productName
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="mx-8"
                                onClick={handlePreviousSlide}
                            >
                                <RightSliderArrow />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-suggestion-container">
                    <h2 className="label arial text-4xl text-white">
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                        {visibleProducts.map((product) => (
                            <div className="p-2" key={product.id}>
                                <ProductCard
                                    likeicon={<WishListIcon />}
                                    image={product.image}
                                    title={product.title}
                                    rate={product.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
