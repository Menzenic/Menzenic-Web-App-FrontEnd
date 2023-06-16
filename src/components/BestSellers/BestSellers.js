import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSellers.css";
import image1 from "../images/product1.jpg";
import image2 from "../images/product2.jpg";
import image3 from "../images/product1.jpg";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Prev
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Next
    </div>
  );
};

const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="best-sellers">
      <h2>Best Sellers</h2>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Product 1" />
          <p>Product 1</p>
          <div className="product-actions">
            <button className="btn btn-buy-now">Buy Now</button>
            <button className="btn btn-add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div>
          <img src={image2} alt="Product 2" />
          <p>Product 2</p>
          <div className="product-actions">
            <button className="btn btn-buy-now">Buy Now</button>
            <button className="btn btn-add-to-cart">Add to Cart</button>
          </div>
        </div>
        <div>
          <img src={image3} alt="Product 3" />
          <p>Product 3</p>
          <div className="product-actions">
            <button className="btn btn-buy-now">Buy Now</button>
            <button className="btn btn-add-to-cart">Add to Cart</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BestSellers;
