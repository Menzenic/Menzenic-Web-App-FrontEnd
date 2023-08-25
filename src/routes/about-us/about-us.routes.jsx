import React from "react";
import { Footer } from "../../components/index";
import { VisionIcon, MissionIcon } from "../../utils/assets";
import menZenicImage from "../../images/Jpgs/menzenic.jpeg";
import "./about-us.css";

const AboutUs = () => {
	return (
		<div className="about-section flex flex-col pt-20">
			<div className="about-top flex flex-col-reverse md:flex-row items-start my-10">
				<div className="about-content text-white flex-1 px-12 md:order-2">
					<p className="font-semibold text-2xl mb-8">
						Welcome to our world of intimate care for men!
					</p>
					<p className="section-text text-xl leading-8 mt-0 mb-6 lg:mb-0 lg:mr-8">
						At Menzenic, we are not frightened to attack the taboo
						and shake up the status quo. We believe that taking care
						of your intimate areas should be as pleasurable as it's
						essential. That is why we have designed a range of
						intimate care products that are as unique as you are.
						<br />
						<br />
						We understand that style isn't just about what you wear
						or how you groom, it's about embracing a mindset that
						shows confidence. Our precisely curated selection of
						intimate care products reflects our commitment to
						quality, and timeless appeal. Each item in our intimate
						care roster is designed to improve your self-confidence
						and to make a lasting impression. At Menzenic it's about
						creating a community of like-minded people who value the
						finer things in life. Our brand is a place where you can
						find alleviation, engage in meaningful exchanges, and
						discover new possibilities.
						<br />
						<br />
						With Menzenic's intimate care range, don't just be
						better, be the best.
					</p>
					<div className="about-icons flex flex-col mt-16 text-xl leading-8 md:flex-row md:mt-16">
						<div className="icon flex flex-col items-start">
							<div className="flex items-center mb-2">
								<VisionIcon className="text-3xl mr-2" />
								<span className="icon-text text-2xl font-semibold ml-2">
									Vision
								</span>
							</div>
							<p className="section-text text-left mt-6 max-w-xs lg:max-w-md md:w-full">
								Our Vision is to help men to be the best version
								of themselves, by taking care of their most
								basic need i.e. their intimate well-being.
							</p>
						</div>
						<div className="icon flex flex-col items-start ml-0 mt-8 sm:mt-0 md:ml-20">
							<div className="flex items-center mb-2">
								<MissionIcon className="text-3xl mr-2" />
								<span className="icon-text text-2xl font-semibold ml-2">
									Mission
								</span>
							</div>
							<p className="section-text text-left mt-6 max-w-xs lg:max-w-md md:w-full">
								To educate men about the importance of their
								intimate hygiene & sexual well-being and to
								remove the stigma and taboo around it.
							</p>
						</div>
					</div>
				</div>
				<div className="flex-0 pl-2 sm:pl-12 pb-14 mr-12 w-full md:w-2/5">
					<img
						src={menZenicImage}
						alt="menZenic"
						className="w-full h-auto md:w-[600px] md:h-[850px] object-cover"
					/>
				</div>
			</div>
			<div className="about-bottom">
				<Footer />
			</div>
		</div>
	);
};

export default AboutUs;
