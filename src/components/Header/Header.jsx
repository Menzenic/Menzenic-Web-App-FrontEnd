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
import clsx from "clsx";

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
						<div
							className={clsx(
								"h-[400px] header-image",
								"lg:h-[682px]"
							)}
						></div>
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
									title={"Coming soon"}
									// onClick={() => navigate("/product")}
									disabled
								/>
							</div>
						</div>
					</>
				</SwiperSlide>
				<SwiperSlide>
					<>
						<div
							className={clsx(
								"h-[400px] bg-[#080808] text-white relative flex items-center",
								"lg:h-[682px]"
							)}
						>
							<img
								src={HairRemovalSprayBgRemPng}
								alt="Hair Removal Spray"
								className={clsx("h-[50%]", "lg:h-[80%]")}
							/>
							<div
								className={clsx(
									"flex flex-col h-[40%] -ml-10",
									"lg:h-[474px] lg:-ml-32"
								)}
							>
								<p className={clsx("text-xs", "lg:text-4xl")}>
									WHY BUY FROM US?
								</p>
								<p
									className={clsx(
										"text-xs italic mt-5 max-w-[80%]",
										"lg:text-2xl lg:mt-10"
									)}
								>
									The best product in the hair removal space -
									if you don't believe us, try it out for
									yourself.
								</p>
								<div
									className={clsx(
										"hidden items-center relative text-xs h-[50%]",
										"lg:text-2xl lg:h-[203px] lg:mt-7 lg:flex"
									)}
								>
									<HomeDoubleDotBar className="absolute top-0" />
									<p className="absolute top-9 left-10">
										Saves you time, removes hair in just 5
										mins.
									</p>
									<p className="absolute top-[120px] left-10">
										No side effects, applicable on all skin
										types.
									</p>
									<div
										className={clsx(
											"ml-4 flex flex-col justify-between h-[50%]",
											"lg:h-[86px]"
										)}
									></div>
								</div>
								<Button
									title={"Coming soon"}
									// onClick={() => navigate("/product")}
									className="mt-7 ml-3 z-10"
									disabled={true}
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
