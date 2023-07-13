import React from "react";
import "./temp.css";

const ChatBubble = ({ message, isUser }) => {
    const messageContent = message.message;

    if (!messageContent) {
        return null;
    }

    return (
        <div
            className={`flex items-start justify-${
                isUser ? "end" : "start"
            } m-2`}
        >
            <div
                className={`pic ${
                    isUser ? "arrow-right-pic" : "arrow-left-pic"
                }`}
            ></div>{" "}
            <div
                className={`message-bubble text-base border border-white text-white rounded-r-xl rounded-bl-xl px-5 py-1 ${
                    isUser ? "user-bubble" : "bot-bubble"
                }`}
            >
                {messageContent}
            </div>
        </div>
    );
};

export default ChatBubble;
