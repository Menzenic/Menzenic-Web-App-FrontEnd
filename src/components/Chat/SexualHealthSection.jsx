import clsx from "clsx";

import { useEffect, useRef, useState } from "react";
import ChatBubbleTemp from "./ChatBubbleTemp";
import { HealthAssesmentRobotIcon } from "../../utils";

import "./temp.css";

const SexualHealthSection = ({ props, finalPageHandler }) => {
	const ref = useRef();

	const [welcomeMessage, setWelcomeMessage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [userOption1, setUserOption1] = useState({
		render: false,
		content: "",
	});
	const [userOption2, setUserOption2] = useState({
		render: false,
		content: "",
	});
	const [userOption3, setUserOption3] = useState({
		render: false,
		content: "",
	});
	const [userOption4, setUserOption4] = useState({
		render: false,
		content: "",
	});
	// const [userOption5, setUserOption5] = useState({
	// 	render: false,
	// 	content: "",
	// });
	// const [userOption6, setUserOption6] = useState({
	// 	render: false,
	// 	content: "",
	// });

	const [beginConversation1, setBeginConversation1] = useState(false);
	const [beginConversation2, setBeginConversation2] = useState(false);
	const [beginConversation3, setBeginConversation3] = useState(false);
	const [beginConversation4, setBeginConversation4] = useState(false);
	// const [beginConversation5, setBeginConversation5] = useState(false);
	// const [beginConversation6, setBeginConversation6] = useState(false);

	const [finalMessage, setFinalMessage] = useState(false);
	const [finalLoader, setFinalLoader] = useState(false);

	const startClickHandler = () => {
		setLoading(true);
		setTimeout(() => {
			setBeginConversation1(true);
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		setTimeout(() => {
			setWelcomeMessage(true);
		}, 500);
	}, []);

	return (
		<div className="w-full max-h-[50%] relative">
			{/* Initiate conversation */}
			{welcomeMessage && (
				<>
					<ChatBubbleTemp
						arrow={true}
						content={props.welcomeContent.title}
					/>
					<ChatBubbleTemp
						arrow={false}
						content={
							<WelcomeContent
								para={props.welcomeContent.para}
								click={startClickHandler}
							/>
						}
					/>
				</>
			)}

			{/* 1st conversation */}
			{beginConversation1 && (
				<>
					<ChatBubbleTemp
						arrow={true}
						content={
							<Conversation
								title={props.conversation1.title}
								options={props.conversation1.options}
								onClick={(e) => {
									setUserOption1({
										render: e.render,
										content: e.content,
									});
									setLoading(true);
									setTimeout(() => {
										ref.current.scrollIntoView({
											behavior: "smooth",
										});
										setTimeout(() => {
											setLoading(false);
											setBeginConversation2(true);
										}, 1000);
									}, 2000);
								}}
							/>
						}
					/>
				</>
			)}
			{userOption1.render && (
				<ChatBubbleTemp user={true} content={userOption1.content} />
			)}

			{/* 2nd conversation */}
			{beginConversation2 && (
				<>
					<ChatBubbleTemp
						arrow={true}
						content={
							<Conversation
								title={props.conversation2.title}
								options={props.conversation2.options}
								onClick={(e) => {
									setUserOption2({
										render: e.render,
										content: e.content,
									});
									setLoading(true);
									setTimeout(() => {
										ref.current.scrollIntoView({
											behavior: "smooth",
										});
										setTimeout(() => {
											setLoading(false);
											setBeginConversation3(true);
										}, 1000);
									}, 2000);
								}}
							/>
						}
					/>
				</>
			)}
			{userOption2.render && (
				<ChatBubbleTemp user={true} content={userOption2.content} />
			)}

			{/* 3rd conversation */}
			{beginConversation3 && (
				<>
					<ChatBubbleTemp
						arrow={true}
						content={
							<Conversation
								title={props.conversation3.title}
								options={props.conversation2.options}
								onClick={(e) => {
									setUserOption3({
										render: e.render,
										content: e.content,
									});
									setLoading(true);
									ref.current.scrollIntoView({
										behavior: "smooth",
									});
									setTimeout(() => {
										ref.current.scrollIntoView({
											behavior: "smooth",
										});
										setTimeout(() => {
											setLoading(false);
											setBeginConversation4(true);
										}, 1000);
									}, 2000);
								}}
							/>
						}
					/>
				</>
			)}
			{userOption3.render && (
				<ChatBubbleTemp user={true} content={userOption3.content} />
			)}

			{/* 4th conversation */}
			{beginConversation4 && (
				<>
					<ChatBubbleTemp
						arrow={true}
						content={
							<Conversation
								title={props.conversation3.title}
								options={props.conversation3.options}
								onClick={(e) => {
									setUserOption4({
										render: e.render,
										content: e.content,
									});
									setLoading(true);
									setTimeout(() => {
										setLoading(false);
										setFinalLoader(true);
										setTimeout(() => {
											// setFinalMessage(true);
											// setFinalLoader(false);
											finalPageHandler(true);
										}, 5000);
									}, 2000);
								}}
							/>
						}
					/>
				</>
			)}
			{userOption4.render && (
				<ChatBubbleTemp user={true} content={userOption4.content} />
			)}

			{/* Final Loader */}
			{finalLoader && (
				<>
					<ChatBubbleTemp
						arrow={true}
						content={
							<div className="flex items-center">
								<p>
									Assessing your results based on your answers
								</p>
								<LoadingBalls />
							</div>
						}
					/>
				</>
			)}

			{loading && (
				<div className="w-max mt-5">
					<LoadingBalls />
				</div>
			)}

			<span ref={ref}></span>
		</div>
	);
};

const WelcomeContent = (props) => {
	return (
		<div>
			{props.para}.{" "}
			<button
				className="rounded-md text-sm px-5 py-2"
				style={{
					background:
						"linear-gradient(214deg, #F9F9F9 0%, rgba(249, 249, 249, 0.00) 100%)",
				}}
				onClick={() => {
					console.log("hit here 1");
					props.click();
				}}
			>
				START
			</button>
		</div>
	);
};

const Conversation = (props) => {
	return (
		<div>
			<p className="font-bold">{props.title}</p>
			<div className="mt-3 flex flex-col">
				{props.options.map((content, idx) => (
					<p
						className={clsx(
							"bg-white text-black rounded-xl px-5 py-2 cursor-pointer",
							"hover:bg-green-500 hover:text-white",
							idx % 2 !== 0 && "my-2"
						)}
						onClick={() => {
							props.onClick({ render: true, content: content });
						}}
					>
						{content}
					</p>
				))}
			</div>
		</div>
	);
};

// const FinalMessage = () => {
//     return (

//     )
// }

const LoadingBalls = () => {
	return (
		<div className="flex space-x-2 p-5 rounded-full justify-center items-center">
			<div
				className="p-2 w-4 h-4 rounded-full bounce1"
				style={{
					background:
						"linear-gradient(214deg, #F9F9F9 0%, rgba(249, 249, 249, 0.00) 100%)",
				}}
			></div>
			<div
				className="p-2 w-4 h-4 rounded-full bounce2"
				style={{
					background:
						"linear-gradient(214deg, #F9F9F9 0%, rgba(249, 249, 249, 0.00) 100%)",
				}}
			></div>
			<div
				className="p-2 w-4 h-4 rounded-full bounce3"
				style={{
					background:
						"linear-gradient(214deg, #F9F9F9 0%, rgba(249, 249, 249, 0.00) 100%)",
				}}
			></div>
		</div>
	);
};

export default SexualHealthSection;
