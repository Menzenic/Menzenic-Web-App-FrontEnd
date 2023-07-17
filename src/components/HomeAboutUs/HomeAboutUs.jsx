import { useNavigate } from "react-router"
import clsx from "clsx"
import { MZLogo } from "../../utils/assets"

const HomeAboutUs = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full min-h-[438px] bg-white text-black flex flex-col items-center py-16 px-5 border border-black border-r-0">
            <p className="pl-16 font-bold text-[44px] text-center leading-[3rem]">
                What is Menzenic? <br />
                {/* <span className="font-sans font-thin">
                    hygiene {'≤'} intimate hygiene
                </span> */}
            </p>
            <div className="flex w-full justify-center items-center mt-10">
                <img
                    onClick={() => navigate("/about-us")}
                    src={MZLogo}
                    alt={"Menzenic logo"}
                    className="h-36 cursor-pointer shadow-2xl"
                />
                <p className="text-left ml-28 w-[600px] text-xl leading-8">
                    Menzenic is more than a collection of products, here we
                    believe it is a celebration to be a{" "}
                    <span className="font-bold"> modern man </span> in today's
                    world. We are here to inspire and empower you on your
                    journey towards becoming the best version of yourself by
                    taking care of all your intimate (hygiene) needs.
                </p>
            </div>
            <div
                className={clsx(
                    "mt-10 bg-black text-white rounded-sm h-[3rem] flex items-center px-3 transition-all duration-500 cursor-pointer",
                    "transition-all duration-500",
                    "hover:scale-105 hover:rounded-xl background-animation"
                )}
                onClick={() => navigate("/about-us")}
            >
                Learn more about us
            </div>
        </div>
    )
}

export default HomeAboutUs
