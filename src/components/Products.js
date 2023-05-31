import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "../styles/Products.css";
import ProductsData from "./ProductsData";

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAddToCart = (productId) => {
    const product = ProductsData.find((item) => item.id === productId);
    if (product) {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
      console.log(`Product ${product.title} added to cart`);
    }
  };

  const handleAddToWishlist = (productId) => {
    const product = ProductsData.find((item) => item.id === productId);
    if (product) {
      console.log(`Product ${product.title} added to wishlist`);
      // Implement your logic to handle adding to wishlist
    }
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? ProductsData.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === ProductsData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const visibleProducts = ProductsData.slice(currentSlide, currentSlide + 3);

  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div
                className="wishlist-icon"
                onClick={() => handleAddToWishlist(product.id)}
              >
                <FaHeart />
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <span className="product-price">{product.price}</span>
              <div className="product-actions">
                <button
                  className="btn-add-to-cart"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <button className="slider-arrow" onClick={handlePreviousSlide}>
            &lt;
          </button>
          <button className="slider-arrow" onClick={handleNextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
