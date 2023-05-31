import React from "react";
import { Container } from "react-bootstrap";
import "../styles/PromotionBar.css";

const PromotionBar = () => {
  return (
    <div className="promotion-bar">
      <Container>
        <p>Get 20% off on your first order. Use code: WELCOME20</p>
      </Container>
    </div>
  );
};

export default PromotionBar;
