import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import "./Header.css";

const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-[238px] sm:min-h-[638px] relative">
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
		</div>
	);
};

export default Header;
