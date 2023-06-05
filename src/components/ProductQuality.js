import React from "react";
import productQualityImg from "../images/image.png";
import {
  RabbitIcon,
  TriangleIcon,
  HandIcon,
  AtomIcon,
  EarthIcon,
  LeafIcon,
} from "../utils/assets";
import "../styles/ProductQuality.css";

const ProductQuality = () => {
  return (
    <div className="product-quality">
      <div className="product-quality-content">
        <h2 className="product-quality-title">Our Products Are</h2>
        <div className="product-quality-icons">
          {/* Icon 1 */}
          <div className="product-quality-icon">
            <RabbitIcon className="icon" />
            <span className="icon-label">No animal testing</span>
          </div>

          {/* Icon 2 */}
          <div className="product-quality-icon">
            <TriangleIcon className="icon" />
            <span className="icon-label">Non Toxic</span>
          </div>

          {/* Icon 3 */}
          <div className="product-quality-icon">
            <HandIcon className="icon" />
            <span className="icon-label">100% Natural</span>
          </div>

          {/* Icon 4 */}
          <div className="product-quality-icon">
            <AtomIcon className="icon" />
            <span className="icon-label">No animal testing</span>
          </div>

          {/* Icon 5 */}
          <div className="product-quality-icon">
            <EarthIcon className="icon" />
            <span className="icon-label">Non Toxic</span>
          </div>

          {/* Icon 6 */}
          <div className="product-quality-icon">
            <LeafIcon className="icon" />
            <span className="icon-label">100% Natural</span>
          </div>
        </div>
      </div>
      <img
        src={productQualityImg}
        alt="prdouct quality img"
        className="product-quality-image"
      />
    </div>
  );
};

export default ProductQuality;
