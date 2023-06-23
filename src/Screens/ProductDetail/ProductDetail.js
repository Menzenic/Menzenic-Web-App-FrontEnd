import React from "react";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
    return (
        <div className="product-detail">
            <div className="product-detail-container">
                <h2>This is Product Detail Section</h2>
            </div>
            <div className="product-suggestion-container">
                <h2>You may also like these Products</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetail;
