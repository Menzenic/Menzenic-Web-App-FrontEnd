import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import clsx from "clsx";

import { Button, ChatRoom } from "../../components";

import {
	HealthAssesmentBackdrop,
	HealthAssesmentImage,
	HealthAssesmentRobotIcon,
} from "../../utils/";
import ChatRoomTemp from "../../components/Chat/ChatRoomTemp";

import "./temp.css";
import { useNavigate } from "react-router";

const HealthAssessment = () => {
	const navigate = useNavigate();
	const [height, setHeight] = useState(350);
	const [loader, setLoader] = useState(false);
	const ref = useRef();

	const [showChatbot, setShowChatbot] = useState(false);
	const [showTopEle, setShowTopEle] = useState(true);

	const [finalPage, setFinalPage] = useState(false);

	const handleButtonClick = () => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
			flushSync(() => {
				setShowChatbot(true);
			});
			ref.current.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => {
				setShowTopEle(false);
			}, 2000);
		}, 500);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerHeight < 740) {
				setHeight(200);
			} else {
				setHeight(350);
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [height]);

	return (
		<>
			<div
				className={clsx(
					"h-screen newpage-container relative pt-32",
					showTopEle ? "block" : "hidden"
				)}
			>
				<div className="absolute top-[10rem] left-[4.875rem] z-10">
					<div
						className={clsx(
							"mb-10 text-white text-left leading-10",
							"w-[80%] text-sm",
							"md:w-[70%] md:text-base",
							"lg:text-4xl"
						)}
					>
						<b>Ready to priorities your Intimate well-being?</b>
						<br />
						<br />
						<span className="lg:leading-10">
							Complete our health assessment in just a few minutes
							and gain valuable insights to optimise your Intimate
							health and lead a happier, healthier life.
						</span>
					</div>
					{!loader ? (
						!showChatbot ? (
							<Button
								title={"Let's begin"}
								onClick={handleButtonClick}
							/>
						) : (
							<></>
						)
					) : (
						<div className="spinner">
							<div></div>
							<div></div>
						</div>
					)}
				</div>
				<HealthAssesmentBackdrop
					className={clsx(
						"absolute bottom-0 right-0",
						"md:h-[50%] md:w-[50%]",
						""
					)}
				/>
			</div>
			{/* <div id="chatBot" className={clsx("h-[900px] w-[900px] bg-red-400")}></div> */}

			{/* Health assessment section */}
			<div
				ref={ref}
				className={clsx(
					"h-screen w-full flex flex-col items-center",
					"sm:justify-center",
					"lg:justify-normal lg:pt-[10%]",
					!showChatbot ? "hidden" : "block"
				)}
				style={{
					background: "black",
					backgroundImage:
						"linear-gradient(180deg, #000 0%, rgba(19, 19, 19, 0.73) 40.95%, rgba(117, 113, 113, 0.46) 80.73%, rgba(164, 164, 164, 0.00) 100%)",
				}}
			>
				<div className="relative w-[80%]">
					<p className="text-white text-[22px] font-bold">
						Health Assessment
					</p>
					<HealthAssesmentRobotIcon className="absolute top-10 -left-[70px]" />
				</div>
				<div className="mt-5 w-[80%] overflow-y-scroll lg:max-h-[80%] scrollbar-hidden">
					{/* <ChatRoom height={height} /> */}
					<div className="w-full flex items-center">
						<ChatRoomTemp
							finalPageHandler={(event) => {
								setFinalPage(event);
							}}
						/>
					</div>
				</div>
			</div>

			{finalPage && (
				<div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black/60">
					<div className="bg-white rounded-xl flex flex-col items-center justify-center w-[60%] h-[70%] p-5">
						<p className="text-center font-bold text-3xl">
							Amazing Intimate Health
						</p>
						<p className="text-center w-[50%] mt-10">
							Congratulations! Your intimate health seems to be in
							excellent condition. You have indicated positive
							habits and practices that contribute to a healthy
							intimate well-being. Keep up the good work and
							maintain your healthy lifestyle.
						</p>
						<button
							onClick={() => navigate("/")}
							className="bg-black rounded-lg text-white px-5 py-2 mt-5"
						>
							Back to Home
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default HealthAssessment;
