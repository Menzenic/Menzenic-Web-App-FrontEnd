import "./temp.css"

const ChatBubble = ({message}) => {
    return (
        <div className="flex items-start h-max m-2">
            <duv className="pic arrow-left-pic"></duv>
            <div className="text-base border border-white text-white rounded-r-xl rounded-bl-xl px-5 py-1">
                {message}
            </div>
        </div>
    )
}

export default ChatBubble
