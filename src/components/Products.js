import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { WishListIcon } from "../utils/assets";
import "../styles/Products.css";
import ProductsData from "./ProductsData";

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
    <section className="products">
      <h2 className="section-title">Featured Products</h2>
      <div className="slider-container">
        <button
          className="slider-arrow slider-arrow-left"
          onClick={handlePreviousSlide}
        >
          <FaChevronLeft />
        </button>
        <div className="product-list">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="wishlist-icon">
                <WishListIcon />
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <span className="product-price">{product.price}</span>
              <div className="product-actions">
                <button className="btn-add-to-cart">Add to Cart</button>
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

export default Products;
