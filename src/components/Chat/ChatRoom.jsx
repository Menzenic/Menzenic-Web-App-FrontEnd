import { useContext, useEffect, useState } from "react"
import { HealthAssesmentRobotIcon } from "../../utils"
import ChatBubble from "./ChatBubble"
import { ChatContext } from "../../contexts/chat.context"

const ChatRoom = (props) => {
    const [inputVal, setInputVal] = useState("")
    const [chatData, setChatData] = useState([])

    const { chatStore, chatVal } = useContext(ChatContext)

    const formSubmitHandler = (e) => {
        e.preventDefault()
        chatStore(inputVal)
        setInputVal('')
    }

    useEffect(() => {
        setChatData(chatVal)
    }, [chatVal])

    return (
        <>
            <div className="relative mx-[8.063rem] max-h-[50%]">
                <HealthAssesmentRobotIcon className="absolute top-0 h-[3.875rem] w-[3.875rem]" />
                <div
                    className="px-[70px] overflow-y-scroll hide-scroll-bar"
                    style={{
                        height: props.height,
                    }}
                >
                    <div className="max-w-[60%]">
                        {chatData && chatData.map((chat, idx) => (
                            <ChatBubble key={idx} message={chat.message} />
                        ))}
                    </div>
                </div>
                <div className="absolute -bottom-[2.7rem] w-full px-10 h-[40px]">
                    <form onSubmit={formSubmitHandler}>
                        <input
                            placeholder="Type a message"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            className="w-full text-base rounded-md px-3 py-2 bg-transparent border border-black text-white outline-none"
                        />
                        <button
                            type="submit"
                            className="h-10 w-10 bg-yellow-400"
                        >
                            HIT HIT HIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatRoom
