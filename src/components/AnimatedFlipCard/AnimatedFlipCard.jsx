import clsx from "clsx";

import { HygieneAndComfortIcon } from "../../utils";

import "./temp.css";

const AnimatedFlipCard = (props) => {
	return (
		<div className={clsx("container h-max w-max")}>
			<div
				className="card h-[400px] w-[297px]"
				// style={{
				// 	transform: showAnimation ? 'rotateY(180deg)' : ''
				// }}
			>
				<div
					className={clsx(
						"h-full w-full absolute rounded-[19px] front",
						"flex flex-col justify-center items-center",
						"md:leading-5"
					)}
					style={{
						boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
					}}
				>
					<div
						className={clsx(
							"w-[124px] h-[124px] rounded-full flex items-center justify-center bg-black",
							"sm:w-[164px] sm:h-[164px]"
						)}
					>
						{props.image}
					</div>
					<p className="font-bold text-xl mt-5">{props.title}</p>
				</div>
				<div
					className={clsx(
						"h-full w-full flex items-center justify-center back",
						"rounded-[19px]"
					)}
					style={{
						boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
					}}
				>
					<div className="text-center w-[80%]">{props.para}</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedFlipCard;
