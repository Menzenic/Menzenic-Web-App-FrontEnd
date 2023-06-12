import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStethoscope,
    faHeart,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import menZenicImage from "../../images/menzenic.jpeg";

const About = () => {
    return (
        <div className="about-section">
            <div className="about-image">
                <img src={menZenicImage} alt="menZenic" />
            </div>
            <div className="about-content">
                <h2>Re-imagining Men's Health in India</h2>
                <p>
                    At menZenic, we are dedicated to revolutionizing men's
                    health in India by providing comprehensive and personalized
                    solutions. Our goal is to empower men to take control of
                    their health and well-being, making informed decisions and
                    leading fulfilling lives.
                </p>
                <div className="about-icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={faStethoscope} />
                        <span>Expert Advice</span>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Compassionate Care</span>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faShieldAlt} />
                        <span>Safe and Confidential</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
