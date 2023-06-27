import React from "react";
import "./about_us.css";
import { useLocation } from "react-router-dom";
import { VisionIcon, MissionIcon } from "../../utils/assets";
import menZenicImage from "../../images/Jpgs/menzenic.jpeg";
import {Footer} from "../../components/index";

const AboutUs = () => {
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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

export default AboutUs;
