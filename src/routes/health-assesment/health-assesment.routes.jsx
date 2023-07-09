import React, { useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import clsx from "clsx"
import { useNavigate } from "react-router-dom"

import HealthChatbot from "../../Screens/HealthChatbot/HealthChatbot.jsx"
import { Button, ChatRoom } from "../../components"

import { HealthAssesmentImage, HealthAssesmentRobotIcon } from "../../utils/"

const HealthAssessment = () => {
    // const navigate = useNavigate()
    const [height, setHeight] = useState(350)
    const [loader, setLoader] = useState(false)
    const ref = useRef()

    const [showChatbot, setShowChatbot] = useState(false)
    const [showTopEle, setShowTopEle] = useState(true)

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
        }, 500)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < 740) {
                setHeight(200)
            } else {
                setHeight(350)
            }
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [height])

    return (
        <>
            <div
                className={clsx(
                    "h-screen newpage-container relative pt-32",
                    showTopEle ? "block" : "hidden"
                )}
            >
                <div className="absolute top-[14.75rem] left-[4.875rem] z-10">
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
                    className="absolute top-[9.438rem] right-0 h-[70%]"
                />
            </div>
            {/* <div id="chatBot" className={clsx("h-[900px] w-[900px] bg-red-400")}></div> */}
            <div
                ref={ref}
                className={clsx(
                    "h-screen w-full flex flex-col justify-center",
                    !showChatbot ? "hidden" : "block"
                )}
                style={{
                    background: "black",
                    backgroundImage:
                        "linear-gradient(180deg, #000 0%, rgba(19, 19, 19, 0.73) 40.95%, rgba(117, 113, 113, 0.46) 80.73%, rgba(164, 164, 164, 0.00) 100%)",
                }}
            >
                <p className="text-white mb-[2.625rem] text-[22px] font-bold mx-[8.063rem]">
                    Health Assessment
                </p>
                <ChatRoom height={height} />
            </div>
        </>
    )
}

export default HealthAssessment