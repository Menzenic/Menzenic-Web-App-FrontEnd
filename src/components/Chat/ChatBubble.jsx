import React from "react";
import "./temp.css";

const ChatBubble = ({ message, isUser }) => {
    const messageContent = message.message;
    const isFollowUp = message.isFollowUp;

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
                className={`message-bubble text-base border border-white text-white px-5 py-1 relative ${
                    isUser ? "user-bubble" : "bot-bubble"
                } ${
                    isUser
                        ? "rounded-l-xl rounded-br-xl"
                        : "rounded-r-xl rounded-bl-xl"
                }`}
            >
                {messageContent}
                {!isFollowUp && (
                    <div
                        className={`absolute pic ${
                            isUser
                                ? "arrow-right-pic top-0 -right-[0.35rem]"
                                : "arrow-left-pic top-0 -left-[0.35rem]"
                        }`}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default ChatBubble;
