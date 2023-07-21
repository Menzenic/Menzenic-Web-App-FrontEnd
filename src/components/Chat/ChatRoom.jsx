import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import DefaultMessages from "./DefaultMessages";
import { ProductCard } from "../Card";
import { HealthAssesmentRobotIcon } from "../../utils";
import SexualHealthQuiz from "./SexualHealthQuiz";
import PenileHealthQuiz from "./PenileHealthQuiz";
import ButtHealthQuiz from "./PenileHealthQuiz";
import ArmpitHealthQuiz from "./PenileHealthQuiz";

const ChatRoom = () => {
    const [chatVal, setChatVal] = useState(DefaultMessages.messages);
    const [inputVal, setInputVal] = useState();
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        const chatContainer = chatContainerRef.current;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatVal]);

    const handleOptionClick = (option) => {
        const userResponse = {
            message: {
                isDelivered: true,
                isSent: false,
                message: option,
            },
            isUser: true,
        };
        setChatVal([...chatVal, userResponse]);

        // Moving to the next question after a short delay
        setTimeout(() => {
            setCurrentQuestionIndex((prevIndex) =>
                prevIndex === null ? 0 : prevIndex + 1
            );
        }, 1000);
    };

    const startConversation = (flow) => {
        console.log("flow", flow);
        const welcomeMessage = {
            message: {
                isDelivered: true,
                isSent: false,
                message: `Welcome to the ${flow} assessment!`,
            },
        };
        // Button to start the quiz
        const startButton = {
            message: {
                isDelivered: true,
                isSent: false,
                message: (
                    <button
                        onClick={() => handleStartQuiz(flow)}
                        className="h-10 w-full rounded font-bold bg-white text-black"
                    >
                        Click here to start
                    </button>
                ),
            },
        };

        setChatVal([welcomeMessage, startButton]);
        setSelectedQuiz(flow);
    };

    const handleStartQuiz = (flow) => {
        console.log("initiate");
        if (flow === "Sexual Health") {
            console.log("sex health");
            setSelectedQuiz(SexualHealthQuiz);
        } else if (flow === "Penile Health") {
            console.log("pen health");
            setSelectedQuiz(PenileHealthQuiz);
        } else if (flow === "Butt Health") {
            setSelectedQuiz(ButtHealthQuiz);
        } else if (flow === "Armpit Health") {
            console.log("Armpit Health");
            setSelectedQuiz(ArmpitHealthQuiz);
        } else {
            console.log("flow", flow);
            return undefined;
        }
        setCurrentQuestionIndex(0);
    };

    const renderChatMessages = () => {
        return chatVal.map((chat, idx) => (
            <div
                key={idx}
                style={{ display: "flex", alignItems: "flex-start" }}
            >
                {!chat.isUser && (
                    <HealthAssesmentRobotIcon className="h-6 w-6" />
                )}
                <ChatBubble message={chat.message} isUser={chat.isUser} />
            </div>
        ));
    };

    const renderOptions = () => {
        return DefaultMessages.options.map((option, idx) => (
            <div
                key={idx}
                onClick={() => startConversation(option.onClick.flow)}
                className="cursor-pointer"
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                }}
            >
                <ChatBubble message={option.message} isUser={option.isUser} />
            </div>
        ));
    };

    const renderQuizQuestions = () => {
        if (!selectedQuiz) return null;

        const quiz = selectedQuiz;
        const quizQuestions = quiz.questions;

        if (!quizQuestions || quizQuestions.length === 0) return null;

        if (currentQuestionIndex >= quizQuestions.length) {
            // we will suggest the product here
            return (
                <div>
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                        <HealthAssesmentRobotIcon className="h-6 w-6" />
                        <ChatBubble
                            message={{
                                isDelivered: true,
                                isSent: false,
                                message: <ProductCard />,
                            }}
                        />
                    </div>
                </div>
            );
        }

        const currentQuestion = quizQuestions[currentQuestionIndex];

        return (
            <div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <HealthAssesmentRobotIcon className="h-6 w-6" />
                    <ChatBubble
                        message={{
                            isDelivered: true,
                            isSent: false,
                            message: currentQuestion.question,
                        }}
                    />
                </div>
                {currentQuestion.options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="cursor-pointer"
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                        }}
                    >
                        <ChatBubble
                            message={{
                                isDelivered: true,
                                isSent: false,
                                message: <button>{option}</button>,
                            }}
                        />
                    </div>
                ))}
                <div
                    className="mt-4 right-0 w-full px-10 h-[40px]"
                    style={{ position: "", zIndex: 1 }}
                >
                    <form>
                        <input
                            placeholder="Type a message"
                            value={inputVal}
                            className="w-full text-base rounded-md px-3 py-2 bg-transparent border border-black text-white outline-none"
                        />
                        <button
                            type="submit"
                            className="h-10 w-full mt-2 rounded font-bold bg-white text-black"
                        >
                            Done
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="relative mx-[13.063rem] max-h-[50%]">
            <div
                className="px-[40px] overflow-y-scroll hide-scroll-bar"
                style={{ height: "300px" }}
                ref={chatContainerRef}
            >
                <div className="max-w-[100%] ml-auto">
                    {renderChatMessages()}
                    {!selectedQuiz && renderOptions()}
                    {selectedQuiz &&
                        currentQuestionIndex !== null &&
                        renderQuizQuestions()}
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
