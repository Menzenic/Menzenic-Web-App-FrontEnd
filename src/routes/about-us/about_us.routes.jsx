import React from "react";
import "./about_us.css";
import { useLocation } from "react-router-dom";
import { VisionIcon, MissionIcon } from "../../utils/assets";
import menZenicImage from "../../images/Jpgs/menzenic.jpeg";
import { Footer } from "../../components/index";

const AboutUs = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="about-section flex flex-col">
            <div className="about-top flex items-start my-10">
                <div className="about-image flex-0 pl-14 pb-14 w-2/5">
                    <img
                        src={menZenicImage}
                        alt="menZenic"
                        className="w-[482px] h-[630px] object-cover"
                    />
                </div>
                <div className="about-content text-white flex-1 px-12">
                    <p className="section-text text-xl leading-8 mt-0 mb-6 lg:mb-0 lg:mr-8">
                        <p className=" text-2xl font-bold">
                            {" "}
                            Welcome to Menzenic,
                        </p>
                        we believe that true style and a fulfilling lifestyle go
                        hand in hand. Our brand is more than just a collection
                        of products; it's a celebration of what it means to be a
                        modern man in today's world. We're here to inspire and
                        empower you on your journey towards becoming the best
                        version of yourself.
                        <br />
                        <br />
                        At Menzenic, we understand that style is not just about
                        what you wear—it's about embracing a mindset that exudes
                        confidence and authenticity. Our carefully curated
                        selection of products reflects our commitment to
                        craftsmanship, quality, and timeless appeal. Each item
                        in our catalogue is thoughtfully designed to enhance
                        your confidence and make a lasting impression.
                        <br />
                        <br />
                        It's about creating a community of like-minded
                        individuals who value the finer things in life. We're
                        here to connect you with a network of passionate
                        individuals who share your interests and aspirations.
                        Our brand is a place where you can find inspiration,
                        engage in meaningful conversations, and discover new
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
                                Our Vision is to help men to be the best version
                                of themselves, by taking care of their most
                                basic need i.e. their intimate well being.
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
                                To educate men about the importance of their
                                intimate hygiene & sexual wellbeing and to
                                remove the stigma and taboo around it.
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

export default AboutUs;
