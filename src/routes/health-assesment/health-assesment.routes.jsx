import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import HealthChatbot from "../../Screens/HealthChatbot/HealthChatbot.jsx"
import { Button, ChatBubble } from "../../components"

import { HealthAssesmentImage, HealthAssesmentRobot } from "../../utils/"
import clsx from "clsx"
import { flushSync } from "react-dom"

const HealthAssessment = () => {
    // const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const ref = useRef()

    const [showChatbot, setShowChatbot] = useState(false)
    const [showTopEle, setShowTopEle] = useState(true)
    const [inputVal, setInputVal] = useState("")

    const handleButtonClick = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            flushSync(() => {
                setShowChatbot(true)
            })
            ref.current.scrollIntoView({ behavior: "smooth" })
            setTimeout(() => {
                setShowTopEle(false)
            }, 2000)
        }, 5000)
    }

    return (
        <>
            <div className={clsx("h-screen newpage-container relative pt-32", showTopEle ? 'block' : 'hidden')}>
                <div className="absolute top-[14.75rem] left-[4.875rem]">
                    <div className="text-5xl text-white text-left label-arial leading-10">
                        <p>Expert designed solutions</p>
                        <p className="my-8 font-bold">80% Success Rate</p>
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
                <img
                    src={HealthAssesmentImage}
                    alt="health assesment img"
                    className="absolute top-[9.438rem] right-0"
                />
            </div>
            {/* <div id="chatBot" className={clsx("h-[900px] w-[900px] bg-red-400")}></div> */}
            <div
                ref={ref}
                className={clsx(
                    "h-screen w-full",
                    !showChatbot ? "hidden" : "block"
                )}
                style={{
                    background: "black",
                    backgroundImage:
                        "linear-gradient(180deg, #000 0%, rgba(19, 19, 19, 0.73) 40.95%, rgba(117, 113, 113, 0.46) 80.73%, rgba(164, 164, 164, 0.00) 100%)",
                }}
            >
                <p className="text-white text-[22px] font-bold pt-[7.938rem] mx-[8.063rem]">
                    Health Assesment
                </p>
                <div className="relative mt-[2.625rem] mx-[8.063rem]">
                    <HealthAssesmentRobot className="absolute top-0" />
                    <div className="h-[550px] px-[70px] overflow-y-scroll">
                        <div className="">
                            {[...new Array(30)].map(() => (
                                <ChatBubble />
                            ))}
                        </div>
                    </div>
                    <div className="absolute -bottom-[2.7rem] w-full px-10 h-[40px]">
                        <input
                            placeholder="Type a message"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            className="w-full text-xl rounded-md px-3 py-5 bg-transparent border border-black text-white outline-none"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealthAssessment
