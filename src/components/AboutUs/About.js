import React from "react";
import "./About.css";
import { useLocation } from "react-router-dom";
import { VisionIcon, MissionIcon } from "../../utils/assets";
import menZenicImage from "../../images/menzenic.jpeg";
import Footer from "../Footer/Footer";

const About = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="about-section flex flex-col">
            <div className="about-top flex items-start my-10">
                <div className="about-image flex-0 pl-12 pb-14 mr-12 w-2/5">
                    <img
                        src={menZenicImage}
                        alt="menZenic"
                        className="w-482 h-626 object-cover"
                    />
                </div>
                <div className="about-content text-white flex-1 px-12">
                    <p className="section-text text-base leading-6 mt-0 mb-6 lg:mb-0 lg:mr-8">
                        Welcome to Menzenic, where we believe that true style
                        and a fulfilling lifestyle go hand in hand. Our brand is
                        more than just a collection of products; it's a
                        celebration of what it means to be a modern man in
                        today's world. We're here to inspire and empower you on
                        your journey towards becoming the best version of
                        yourself. At Menzenic, we understand that style is not
                        just about what you wear—it's about embracing a mindset
                        that exudes confidence and authenticity. Our carefully
                        curated selection of products reflects our commitment to
                        craftsmanship, quality, and timeless appeal. Each item
                        in our catalogue is thoughtfully designed to enhance
                        your confidence and make a lasting impression. It's
                        about creating a community of like-minded individuals
                        who value the finer things in life. We're here to
                        connect you with a network of passionate individuals who
                        share your interests and aspirations. Our brand is a
                        place where you can find inspiration, engage in
                        meaningful conversations, and discover new
                        possibilities.
                    </p>
                    <div className="about-icons flex  mt-8">
                        <div className="icon flex flex-col items-start">
                            <div className="flex items-center mb-2">
                                <VisionIcon className="text-3xl mr-2" />
                                <span className="icon-text text-lg font-bold ml-2">
                                    Vision
                                </span>
                            </div>
                            <p className="section-text text-left mt-6 max-w-xs lg:max-w-md">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>
                        </div>
                        <div className="icon flex flex-col items-start mx-4">
                            <div className="flex items-center mb-2">
                                <MissionIcon className="text-3xl mr-2" />
                                <span className="icon-text text-lg font-bold ml-2">
                                    Mission
                                </span>
                            </div>
                            <p className="section-text text-left mt-6 max-w-xs lg:max-w-md">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-bottom">
                <Footer />
            </div>
        </div>
    );
};

export default About;
