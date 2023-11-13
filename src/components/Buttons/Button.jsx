import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Button = (props) => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 640);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={clsx(
				"w-[12rem] sm:w-[9rem] h-[2.438rem] flex justify-between items-center px-3 rounded-sm",
				props.className,
				!props.disabled ? "group hover:cursor-pointer" : "opacity-70"
			)}
			style={{
				background:
					"linear-gradient(270.37deg,#f9f9f9 -29.27%, rgba(249, 249, 249, 0) 191.25%",
			}}
			id="button-2"
			onClick={props.onClick}
		>
			<div id="slide"></div>
			<p className="group-hover:font-semibold w-full text-center sm:text-left">
				{props.title}
			</p>
			{isSmallScreen ? null : <div className="shop-arrow right"></div>}
		</div>
	);
};

export default Button;
