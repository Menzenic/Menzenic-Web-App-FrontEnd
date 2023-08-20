import clsx from "clsx";

const ChatBubbleTemp = (props) => {
	return (
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
					"border border-white",
					props.arrow && "rounded-tl-none",
					!props.user
						? "max-w-[75%] text-white"
						: "rounded-tr-none bg-white text-black"
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
	);
};

export default ChatBubbleTemp;
