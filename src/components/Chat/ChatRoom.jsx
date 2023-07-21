import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import DefaultMessages from "./DefaultMessages";
import { ProductCard } from "../Card";
import { HealthAssesmentRobotIcon, UserLoginLogo } from "../../utils";
import SexualHealthQuiz from "./SexualHealthQuiz";
import PenileHealthQuiz from "./PenileHealthQuiz";
import ButtHealthQuiz from "./ButtHealthQuiz";
import ArmpitHealthQuiz from "./ArmpitHealthQuiz";
import InputQuestions from "./InputQuestions";

const ChatRoom = () => {
    const [chatVal, setChatVal] = useState(DefaultMessages.messages);
    const [inputVal, setInputVal] = useState("");
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        const chatContainer = chatContainerRef.current;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatVal]);

    const handleOptionClick = (option, question) => {
        const userResponse = {
            message: {
                isDelivered: true,
                isSent: false,
                message: option,
            },
            isUser: true,
        };

        // Checking if the quiz has been completed
        if (currentQuestionIndex === selectedQuiz.questions.length - 1) {
            setIsQuizFinished(true);
        } else {
            const questionWithAnswer = {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: question.question,
                },
                isUser: false,
            };
            setChatVal([...chatVal, questionWithAnswer, userResponse]);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setCurrentQuestionIndex((prevIndex) =>
                    prevIndex === null ? 0 : prevIndex + 1
                );
            }, 1000);
        }
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
        if (flow === "Sexual Health") {
            setSelectedQuiz(SexualHealthQuiz);
        } else if (flow === "Penile Health") {
            setSelectedQuiz(PenileHealthQuiz);
        } else if (flow === "Butt Health") {
            setSelectedQuiz(ButtHealthQuiz);
        } else if (flow === "Armpit Health") {
            setSelectedQuiz(ArmpitHealthQuiz);
        } else {
            return undefined;
        }
        setCurrentQuestionIndex(0);
        setChatVal([]);
        setIsQuizFinished(false);
    };

    const handleInputQuestionSubmit = (e) => {
        e.preventDefault();
        // Collecting user's input and store it in the InputQuestions object
        const updatedInputQuestions = InputQuestions.questions.map(
            (questionObj) => ({
                ...questionObj,
                answer: questionObj.answer || "",
            })
        );
        setChatVal([...chatVal, ...updatedInputQuestions]);
        setIsQuizFinished(true);
    };

    const renderChatMessages = () => {
        return chatVal.map((chat, idx) => (
            <div
                key={idx}
                className={`${
                    chat.isUser ? "justify-end" : "justify-start"
                } flex items-end`}
            >
                {chat.isUser ? (
                    <>
                        <ChatBubble
                            message={chat.message}
                            isUser={chat.isUser}
                        />
                        <UserLoginLogo className="h-8 w-8 ml-2" />
                    </>
                ) : (
                    <>
                        <ChatBubble
                            message={chat.message}
                            isUser={chat.isUser}
                        />
                    </>
                )}
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
        if (!selectedQuiz || !selectedQuiz.questions) return null;

        const quiz = selectedQuiz;
        const quizQuestions = quiz.questions;

        if (!quizQuestions || quizQuestions.length === 0) return null;

        if (isQuizFinished) {
            return (
                <div>
                    {/* Render the input questions and input form */}
                    {InputQuestions.questions.map((inputQuestion, index) => (
                        <div
                            key={index}
                            className={`${
                                chatVal[chatVal.length - 1]?.isUser
                                    ? "justify-end"
                                    : "justify-start"
                            } flex items-end`}
                        >
                            <ChatBubble
                                message={{
                                    isDelivered: true,
                                    isSent: false,
                                    message: inputQuestion.question,
                                }}
                            />
                            {chatVal[chatVal.length - 1]?.isUser ? (
                                <input
                                    type={inputQuestion.input}
                                    value={inputQuestion.answer || ""}
                                    onChange={(e) => {
                                        const updatedInputQuestions = [
                                            ...InputQuestions.questions,
                                        ];
                                        updatedInputQuestions[index].answer =
                                            e.target.value;
                                        setInputVal(e.target.value);
                                    }}
                                    className="border border-black rounded-lg px-2 py-1 ml-2"
                                />
                            ) : null}
                        </div>
                    ))}
                    {/* Render the submit button */}
                    <div className="flex justify-start mt-2">
                        <button
                            onClick={handleInputQuestionSubmit}
                            className="h-8 px-3 bg-white text-black rounded"
                        >
                            Generate OTP
                        </button>
                    </div>
                </div>
            );
        }

        const currentQuestion = quizQuestions[currentQuestionIndex];

        return (
            <div>
                <div
                    className={`${
                        chatVal[chatVal.length - 1]?.isUser
                            ? ""
                            : "justify-start"
                    } flex items-end`}
                >
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
                        onClick={() =>
                            handleOptionClick(option, currentQuestion)
                        }
                        className={`${
                            chatVal[chatVal.length - 1]?.isUser
                                ? ""
                                : "justify-start"
                        } flex ${
                            chatVal[chatVal.length - 1]?.isUser ? "" : "ml-2"
                        } items-end`}
                    >
                        <ChatBubble
                            message={{
                                isDelivered: true,
                                isSent: false,
                                message: (
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "34px",
                                                marginRight: "5px",
                                            }}
                                        >
                                            &bull;
                                        </span>
                                        <button>{option}</button>
                                    </div>
                                ),
                            }}
                        />
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mt-2">
                        <div className="animate-spin h-6 w-6 border-t-2 border-b-2 border-white rounded-full" />
                    </div>
                )}
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
                    <HealthAssesmentRobotIcon className="h-8 w-8 mr-2" />
                    {renderChatMessages()}
                    {!selectedQuiz && renderOptions()}
                    {selectedQuiz &&
                        currentQuestionIndex !== null &&
                        renderQuizQuestions()}
                    {isQuizFinished && (
                        <div>
                            <p>Quiz completed! Here's a suggested product:</p>
                            <ProductCard />
                        </div>
                    )}
                </div>
            </div>
            <div
                className="mt-4 right-0 w-full px-10 h-[40px]"
                style={{ position: "", zIndex: 1 }}
            >
                <form>
                    <input
                        placeholder="Type a message"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        className="w-full text-base rounded-md px-3 py-2 bg-transparent border border-black text-white outline-none"
                    />
                    {!isQuizFinished ? (
                        <button
                            type="submit"
                            className="h-10 w-full mt-2 rounded font-bold bg-white text-black"
                        >
                            Results
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="h-10 w-full mt-2 rounded font-bold bg-white text-black"
                            onClick={handleInputQuestionSubmit}
                        >
                            Generate OTP
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ChatRoom;
