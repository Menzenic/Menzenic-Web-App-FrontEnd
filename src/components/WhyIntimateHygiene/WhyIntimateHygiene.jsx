import { useEffect, useState, useRef } from "react"

const WhyIntimateHygiene = () => {
    return (
        <div className="section-background-image min-h-[538px] w-full text-white flex flex-col items-center py-16 text-xl">
            <p className="font-semibold text-[44px] text-center leading-[3rem]">
                Why intimate hygiene <br />{" "}
                <span className="font-sans font-thin">
                    or more like why not?
                </span>
            </p>
            <div className="w-full flex flex-col justify-center items-center mt-10 px-24">
                <p className="text-center leading-8">
                    Neglecting intimate hygiene is like opening a health-themed
                    amusement park! Get ready for the wild rollercoaster ride of
                    lasting health implications and grave illnesses. It's the
                    ultimate thrill-seeking experience that'll have you
                    screaming
                </p>
                <div className="flex justify-between w-full text-base mt-32">
                    <div className="">
                        <p className="font-semibold text-2xl animate-charcter">Be Untroubled</p>
                        {/* <p>
                            Poor intimate hygiene can have lasting health
                            implications, paving the way for the development of
                            grave illnesses if disregarded.
                        </p> */}
                    </div>

                    <div className="">
                        <p className="font-semibold text-2xl animate-charcter">Be Confident</p>
                        {/* <p>
                            Opting for the right intimate care products can
                            strengthen your immune system and elevate your sense of
                            confidence.
                        </p> */}
                    </div>

                    <div className="">
                        <p className="font-semibold text-2xl animate-charcter">Sexual Wellbeing</p>
                        {/* <p>
                            Practising good intimate hygiene not only boosts
                            confidence, reduces discomfort, and prevents infections,
                            but also improves intimacy and supports erectile health.
                        </p> */}
                    </div>
                </div>
            </div>
            {/* <div className="font-poppins mt-28 bg-white text-black rounded-md py-3 px-6">
                Read more...
            </div> */}
        </div>
    )
}

export default WhyIntimateHygiene
