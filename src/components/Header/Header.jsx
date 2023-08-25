import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Button from "../Buttons/Button";

import "swiper/css";
import "swiper/css/autoplay";

import "./Header.css";
import {
	HairRemovalSprayBgRemPng,
	HomeDesign,
	HomeDoubleDotBar,
} from "../../utils";

const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-[238px] sm:min-h-[638px] relative">
			<Swiper
				slidesPerView={1}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				speed={2000}
			>
				<SwiperSlide>
					<>
						<div className="h-[400px] sm:h-[682px] header-image"></div>
						<div className="absolute top-[12.688rem] sm:top-[17.688rem] left-[3.188rem]">
							<div className="text-[24px] sm:text-5xl text-white text-left font-['Arial'] leading-[35px] sm:leading-[55px] font-normal">
								<p>When it comes to your body,</p>
								<p className="mt-3 text-center sm:text-left">
									{" "}
									cleanliness is key
								</p>
							</div>
							<div className="mt-5 flex items-center w-full justify-center sm:justify-start">
								<Button
									title={"Shop Now"}
									onClick={() => navigate("/product")}
								/>
							</div>
						</div>
					</>
				</SwiperSlide>
				<SwiperSlide>
					<>
						<div className="h-[680px] w-screen bg-[#080808] text-white relative flex justify- items-center">
							<img
								src={HairRemovalSprayBgRemPng}
								alt="Hair Removal Spray"
							/>
							<div className="flex flex-col h-[474px] -ml-32">
								<p className="text-4xl">WHY BUY FROM US?</p>
								<p className="italic mt-10 text-2xl max-w-[80%]">
									The best product in the hair removal space -
									if you don't believe us, try it out for
									yourself.
								</p>
								<div className="mt-7 flex items-center relative text-2xl h-[203px]">
									<HomeDoubleDotBar className="absolute top-0" />
									<p className="absolute top-9 left-10">
										Saves you time, removes hair in just 5
										mins.
									</p>
									<p className="absolute top-[120px] left-10">
										No side effects, applicable on all skin
										types.
									</p>
									<div className="ml-4 h-[86px] flex flex-col justify-between"></div>
								</div>
								<Button
									title={"Buy Now"}
									onClick={() => navigate("/product")}
									className="mt-7 ml-3 z-10"
								/>
							</div>
							<HomeDesign className="absolute bottom-0" />
						</div>
					</>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Header;
