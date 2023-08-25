import clsx from "clsx";
import { useEffect, useRef } from "react";

const ChatBubbleTemp = (props) => {
	const ref = useRef();

	useEffect(() => {
		ref.current.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	return (
		<>
			<div
				className={clsx(
					"mt-3 flex",
					props.user && "w-full justify-end pr-5"
				)}
			>
				<div
					className={clsx(
						"h-0 w-0 border-r-[10px] border-y-transparent border-r-white",
						props.arrow ? "border-y-8" : "border-y-0",
						props.user && "hidden"
					)}
				/>
				<div
					className={clsx(
						"whitespace-nowrap w-max p-5 rounded-lg",
						"border-white",
						props.arrow && "rounded-tl-none",
						!props.user
							? "border max-w-[75%] text-white"
							: "border-4 rounded-tr-none bg-white text-black"
					)}
				>
					{props.content}
				</div>
				<div
					className={clsx(
						"h-0 w-0 border-y-8 border-l-[10px] border-y-transparent border-l-white",
						!props.user && "hidden"
					)}
				/>
			</div>
			<span ref={ref}></span>
		</>
	);
};

export default ChatBubbleTemp;
