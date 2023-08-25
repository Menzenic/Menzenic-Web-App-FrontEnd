import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Button, ChatRoom } from "../../components";

import {
	HealthAssesmentBackdrop,
	HealthAssesmentImage,
	HealthAssesmentRobotIcon,
} from "../../utils/";
// import ChatRoomTemp from "../../components/Chat/ChatRoomTemp";

import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./temp.css";
import SexualHealthSection from "../../components/Chat/SexualHealthSection";

const HealthAssessment = () => {
	const navigate = useNavigate();
	const ref = useRef();
	const choiceRef = useRef();

	// useEffect(() => {
	// 	signOutUser();
	// }, []);

	const user = useSelector((state) => state.user.currentUser);
	console.log("user:", user);

	const [height, setHeight] = useState(350);
	const [loader, setLoader] = useState(false);

	const [showChatbot, setShowChatbot] = useState(false);
	const [showTopEle, setShowTopEle] = useState(true);
	const [showSelectedChoice, setShowSelectedChoice] = useState({
		choosingPhase: false,
		finalPhase: false,
	});

	// select card choice state
	const [selected, setSelected] = useState({
		1: false,
		2: false,
		3: false,
	});

	// fill details about the card selected state
	const [cardChoices, setCardChoices] = useState({
		totalConversations: 0,
		title: "",
		welcomeContent: {
			title: "",
			para: "",
		},
		conversation1: {
			title: "",
			options: [],
		},
		conversation2: {
			title: "",
			options: [],
		},
		conversation3: {
			title: "",
			options: [],
		},
		conversation4: {
			title: "",
			options: [],
		},
	});

	// final results state
	const [results, setResults] = useState(false);

	const handleButtonClick = () => {
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
			flushSync(() => {
				if (!user) setShowChatbot(true);
				else {
					setShowSelectedChoice((prevState) => ({
						...prevState,
						choosingPhase: true,
					}));
				}
			});
			ref.current.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => {
				setShowTopEle(false);
			}, 2000);
		}, 500);
	};

	const cardChoiceClick = (cardNum) => {
		if (cardNum === 1) {
			setSelected((prevState) => ({
				...prevState,
				1: true,
			}));
			setCardChoices({
				totalConversations: 4,
				title: "Sexual Health Quiz",
				welcomeContent: {
					title: "Welcome to sex health quiz",
					para: "Make yourself comfortable for a ride never seen before",
				},
				conversation1: {
					title: "How active are you sexually?",
					options: [
						"Very active",
						"Moderate (few times a week)",
						"Once a week",
						"Been a while",
						"Never had sex",
					],
				},
				conversation2: {
					title: "When was the last time you had sex?",
					options: [
						"Recently",
						"6 to 12 months",
						"Over an year ago",
						"Never",
					],
				},
				conversation3: {
					title: "How would you describe your erectile health while sex?",
					options: [
						"Good strong erection",
						"Occasionally not hard enough for penetration",
						"Usually find it difficult to stay hard enough",
					],
				},
				conversation4: {
					title: "How often do you use protection while having sex?",
					options: ["Always", "Sometimes", "Never"],
				},
			});
		} else if (cardNum === 2) {
			setSelected((prevState) => ({
				...prevState,
				2: true,
			}));

			setCardChoices({
				totalConversations: 4,
				title: "Get a rating on your confidence",
				welcomeContent: {
					title: "Welcome to the get a rating on your confidence quiz",
					para: "Brace yourself for some harsh truth",
				},
				conversation1: {
					title: "How active are you sexually?",
					options: [
						"Very active",
						"Moderate (few times a week)",
						"Once a week",
						"Been a while",
						"Never had sex",
					],
				},
				conversation2: {
					title: "When was the last time you had sex?",
					options: [
						"Recently",
						"6 to 12 months",
						"Over an year ago",
						"Never",
					],
				},
				conversation3: {
					title: "How would you describe your erectile health while sex?",
					options: [
						"Good strong erection",
						"Occasionally not hard enough for penetration",
						"Usually find it difficult to stay hard enough",
					],
				},
				conversation4: {
					title: "How often do you use protection while having sex?",
					options: ["Always", "Sometimes", "Never"],
				},
			});
		} else {
			setSelected((prevState) => ({
				...prevState,
				3: true,
			}));

			setCardChoices({
				totalConversations: 4,
				title: "Are you good in bed?",
				welcomeContent: {
					title: "How genuine are you in bed?",
					para: "Press start to get a rating",
				},
				conversation1: {
					title: "How active are you sexually?",
					options: [
						"Very active",
						"Moderate (few times a week)",
						"Once a week",
						"Been a while",
						"Never had sex",
					],
				},
				conversation2: {
					title: "When was the last time you had sex?",
					options: [
						"Recently",
						"6 to 12 months",
						"Over an year ago",
						"Never",
					],
				},
				conversation3: {
					title: "How would you describe your erectile health while sex?",
					options: [
						"Good strong erection",
						"Occasionally not hard enough for penetration",
						"Usually find it difficult to stay hard enough",
					],
				},
				conversation4: {
					title: "How often do you use protection while having sex?",
					options: ["Always", "Sometimes", "Never"],
				},
			});
		}

		flushSync(() => {
			setShowSelectedChoice((prevState) => ({
				...prevState,
				finalPhase: true,
			}));
		});
		choiceRef.current.scrollIntoView({ behavior: "smooth" });
		setTimeout(() => {
			setShowSelectedChoice((prevState) => ({
				...prevState,
				choosingPhase: false,
			}));
		}, 2000);
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
				<div className="absolute top-[10rem] left-[4.875rem] z-10 w-full">
					<div
						className={clsx(
							"mb-10 text-left leading-10",
							"w-[80%]",
							"md:w-[70%]"
						)}
					>
						<p
							className={clsx(
								"text-white font-bold w-full text-sm",
								"md:text-base",
								"lg:text-3xl"
							)}
						>
							Ready to priorities your Intimate well-being?
						</p>
						<p
							className={clsx(
								"mt-5 w-[70%] text-2xl text-white",
								"lg:leading-8"
							)}
						>
							Complete our health assessment in just a few minutes
							and gain valuable insights to optimise your Intimate
							health and lead a happier, healthier life.
						</p>
						{!user ? (
							<>
								<div className="mt-5 text-2xl text-white">
									Sign up for an exclusive set of problems
									based on your issue
									<br />
									<Button
										className="text-sm text-black mt-3 !w-[12.5rem]"
										title={"Continue to sign up"}
										onClick={() => navigate("/auth")}
									/>
								</div>
								<div className="mt-5 text-2xl text-white">
									Continue without signing up
									<div className="mt-3">
										{!loader ? (
											!showChatbot ? (
												<Button
													className="text-base text-black"
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
								</div>
							</>
						) : (
							<div className="mt-5">
								{!loader ? (
									!showChatbot ? (
										<Button
											className="text-base text-black"
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
						)}

						{/* <b>Ready to priorities your Intimate well-being?</b>
						<br />
						<br />
						<span className="lg:leading-10">
							Complete our health assessment in just a few minutes
							and gain valuable insights to optimise your Intimate
							health and lead a happier, healthier life.
						</span> */}
					</div>
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
			{!user ? (
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
							{/* <ChatRoomTemp
								finalPageHandler={(e) => {
									console.log("eee:::", e);
									setResults(e);
								}}
							/> */}
							<SexualHealthSection
								props={{
									totalConversations: 4,
									title: "Sexual Health Quiz",
									welcomeContent: {
										title: "Welcome to sex health quiz",
										para: "Make yourself comfortable for a ride never seen before",
									},
									conversation1: {
										title: "How active are you sexually?",
										options: [
											"Very active",
											"Moderate (few times a week)",
											"Once a week",
											"Been a while",
											"Never had sex",
										],
									},
									conversation2: {
										title: "When was the last time you had sex?",
										options: [
											"Recently",
											"6 to 12 months",
											"Over an year ago",
											"Never",
										],
									},
									conversation3: {
										title: "How would you describe your erectile health while sex?",
										options: [
											"Good strong erection",
											"Occasionally not hard enough for penetration",
											"Usually find it difficult to stay hard enough",
										],
									},
									conversation4: {
										title: "How often do you use protection while having sex?",
										options: [
											"Always",
											"Sometimes",
											"Never",
										],
									},
								}}
								finalPageHandler={(e) => setResults(e)}
							/>
						</div>
					</div>
				</div>
			) : (
				<>
					<div
						ref={ref}
						className={clsx(
							"h-screen w-screen bg-black text-black px-10",
							"flex justify-between items-center",
							!showSelectedChoice.choosingPhase
								? "hidden"
								: "block"
						)}
					>
						<ChoiceCard
							title="Sexual health"
							subTitle="Begin with Sexual Health evaluation"
							onClick={() => cardChoiceClick(1)}
							className={clsx(
								selected[1] && "!bg-slate-800 !text-white"
							)}
						/>
						<ChoiceCard
							title="Confidence"
							subTitle="Check where you are in the confidence scale"
							onClick={() => cardChoiceClick(2)}
							className={clsx(
								"mx-10",
								selected[2] && "!bg-slate-800 !text-white"
							)}
						/>
						<ChoiceCard
							title="Measure your testosterone"
							subTitle="Check your bedroom capabilities"
							onClick={() => cardChoiceClick(3)}
							className={clsx(
								selected[3] && "!bg-slate-800 !text-white"
							)}
						/>
					</div>
					<div
						ref={choiceRef}
						className={clsx(
							"h-screen w-full flex flex-col items-center",
							"sm:justify-center",
							"lg:justify-normal lg:pt-[10%]",
							!showSelectedChoice.finalPhase ? "hidden" : "block"
						)}
						style={{
							background: "black",
							backgroundImage:
								"linear-gradient(180deg, #000 0%, rgba(19, 19, 19, 0.73) 40.95%, rgba(117, 113, 113, 0.46) 80.73%, rgba(164, 164, 164, 0.00) 100%)",
						}}
					>
						<div className="relative w-[80%]">
							<p className="text-white text-[22px] font-bold">
								{cardChoices.title}
							</p>
							<HealthAssesmentRobotIcon className="absolute top-10 -left-[70px]" />
						</div>
						<div className="mt-5 w-[80%] overflow-y-scroll lg:max-h-[80%] scrollbar-hidden">
							{/* <ChatRoom height={height} /> */}
							<div className="w-full flex items-center">
								<SexualHealthSection
									props={cardChoices}
									finalPageHandler={(e) => setResults(e)}
								/>
							</div>
						</div>
					</div>
				</>
			)}

			{results && <ResultsSection />}
		</>
	);
};

const ChoiceCard = (props) => {
	return (
		<div
			className={clsx(
				"group cursor-pointer bg-white rounded-xl h-[400px] grow flex flex-col justify-center items-center transition-colors duration-1000",
				"hover:bg-slate-800",
				props.className
			)}
			onClick={() => props.onClick()}
		>
			<p className="transition-colors duration-1000 text-3xl text-center group-hover:text-white">
				{props.title}
			</p>
			<p className="transition-colors duration-1000 text-center group-hover:text-white">
				{props.subTitle}
			</p>
		</div>
	);
};

const ResultsSection = () => {
	const navigate = useNavigate();

	return (
		<div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black/60">
			<div
				className={clsx(
					"relative bg-white rounded-xl flex flex-col items-center justify-center w-[60%] h-[70%] p-5"
				)}
			>
				<p className="text-center font-bold text-3xl">
					Amazing Intimate Health
				</p>
				<p className="text-center w-[50%] mt-10">
					Congratulations! Your intimate health seems to be in
					excellent condition. You have indicated positive habits and
					practices that contribute to a healthy intimate well-being.
					Keep up the good work and maintain your healthy lifestyle.
				</p>
				<button
					onClick={() => navigate("/")}
					className="bg-black rounded-lg text-white px-5 py-2 mt-5"
				>
					Back to Home
				</button>
				<button
					onClick={() => {
						window.location.reload();
					}}
					className="absolute top-5 right-6 text-2xl"
				>
					X
				</button>
			</div>
		</div>
	);
};

export default HealthAssessment;
