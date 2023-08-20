import React from "react";
import "../../utils/styles/styles.css";
import {
	SmileIcon,
	LikeIcon,
	HeartBeatIcon,
	HygieneAndComfortIcon,
} from "../../utils/assets/svg";
import clsx from "clsx";
import AnimatedFlipCard from "../AnimatedFlipCard/AnimatedFlipCard";

const WhyIntimateCare = () => {
	return (
		<div className="p-4 min-h-[658px] mt-14">
			<h2 className="text-3xl sm:text-[44px] font-bold text-center">
				Why Manscape?
			</h2>
			{/* <p className=" text-lg sm:text-2xl text-center mt-9 px-4 sm:px-44">
				Neglecting intimate hygiene risks infections and discomfort.
				Prioritize it to maintain a healthy genital area and overall
				well-being.
			</p> */}
			<div className="flex justify-center items-center w-full mt-16">
				<div
					className={clsx(
						"w-[80%] flex flex-col justify-between",
						"lg:flex-row"
					)}
				>
					{/* Hygiene and comfort */}
					<AnimatedFlipCard
						image={<HygieneAndComfortIcon />}
						title={"Hygiene and Comfort"}
						para={
							"Removing excess hair in sensitive areas can reduce sweat, odor, and bacterial buildup, keeping you feeling fresh and confident throughout the day."
						}
					/>

					{/* <div
							className={clsx(
								"h-[275px] w-full relative bg-white rounded-[19px]",
								"hover:scale-105 transition-all duration-300",
								"sm:w-[297px] sm:mx-8 sm:mt-0",
								"md:my-10"
							)}
							style={{
								boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
							}}
						>

							<div className="absolute top-[-52px] sm:top-[-82px] left-0 right-0 flex justify-center items-end">
								<div className="w-[124px] h-[124px] sm:w-[164px] sm:h-[164px] bg-black rounded-full flex items-center justify-center">
									<HygieneAndComfortIcon />
								</div>
							</div>
							<div className="p-4 absolute bottom-6 left-0 right-0 text-center">
								<p className="text-base label-arial">
									Practising good intimate hygiene not only boosts
									confidence, reduces discomfort, and prevents
									infections, but also improves intimacy and supports
									erectile health.
								</p>
							</div>
						</div> */}

					{/* Enhanced Appearance */}
					<AnimatedFlipCard
						image={<SmileIcon />}
						title={"Enhanced Appearance"}
						para={
							"Neatly removing body hair can accentuate your physique, allowing your hard work at the gym to shine."
						}
					/>

					{/* <div
							className="w-full sm:w-[297px] h-[275px] bg-white mx-2 sm:mx-8 my-10 sm:my-8 relative rounded-[19px] transition-all duration-300 transform hover:scale-105"
							style={{
								boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
							}}
						>
							<div className="absolute top-[-52px] sm:top-[-82px] left-0 right-0 flex justify-center items-end">
								<div className="w-[124px] h-[124px] sm:w-[164px] sm:h-[164px] bg-black rounded-full flex items-center justify-center">
									<SmileIcon />
								</div>
							</div>
							<div className="p-4 absolute bottom-10 left-0 right-0 text-center">
								<p className="text-base label-arial">
									Poor intimate hygiene can have lasting health
									implications, paving the way for the development of
									grave illnesses if disregarded.
								</p>
							</div>
						</div> */}

					{/* Boosted Confidence */}
					<AnimatedFlipCard
						image={<LikeIcon />}
						title={"Boosted Confidence"}
						para={
							"A well groomed look boosts self-confidence, as caring for your body positively impacts self-image and outlook across life's aspects."
						}
					/>

					{/* <div
							className="w-full sm:w-[297px] h-[275px] bg-white mx-2 sm:mx-8  my-10 md:my-10 relative rounded-[19px] transition-all duration-300 transform hover:scale-105 mt-8 sm:mt-0"
							style={{
								boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
							}}
						>
							<div className="absolute top-[-52px] sm:top-[-82px] left-0 right-0 flex justify-center items-end">
								<div className="w-[124px] h-[124px] sm:w-[164px] sm:h-[164px] bg-black rounded-full flex items-center justify-center">
									<LikeIcon />
								</div>
							</div>
							<div className="p-4 absolute bottom-10 left-0 right-0 text-center">
								<p className="text-base label-arial">
									Opting for the right intimate care products can
									strengthen your immune system and elevate your sense
									of confidence.
								</p>
							</div>
						</div> */}
				</div>
			</div>
		</div>
	);
};

export default WhyIntimateCare;
