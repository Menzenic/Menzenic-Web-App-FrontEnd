import React, { useState, useEffect, useRef, useContext } from "react";
import { HealthAssesmentRobotIcon, UserLoginLogo } from "../../utils";
import ChatBubble from "./ChatBubble";
import chatbotData from "../../data/ChatBotData";
import { ProductCard } from "../Card";
import { CategoriesContext } from "../../contexts/categories.context";

const ChatRoom = ({ loggedInUserName, loggedInUserImage }) => {
    const [inputVal, setInputVal] = useState("");
    const [chatVal, setChatVal] = useState([]);
    const [selectedFlow, setSelectedFlow] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [testDone, setTestDone] = useState(false);

    const chatContainerRef = useRef(null);
    const userIconRef = useRef(null);
    const botIconRef = useRef(null);
    const { categoriesMap } = useContext(CategoriesContext);

    const startConversation = (flow, productId) => {
        setSelectedFlow(flow);
        setSelectedProductId(productId);
        setChatVal([]);
        setTestDone(false); // Reset testDone

        // Initialize chat with relevant messages based on the selected flow
        const welcomeMessage = {
            message: {
                isDelivered: true,
                isSent: false,
                message: `Welcome to the ${flow} Health Assessment, ${
                    loggedInUserName ? loggedInUserName : ""
                }! How can I assist you today?`,
            },
            isUser: false,
        };

        setChatVal([welcomeMessage]);
        scrollToBottom();
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (selectedFlow) {
            const userMessage = {
                message: {
                    isDelivered: true,
                    isSent: true,
                    message: inputVal,
                },
                isUser: true,
            };

            if (inputVal.trim().toLowerCase() === "done" && selectedProductId) {
                const suggestedProduct = getCategoryProduct(selectedProductId);

                if (suggestedProduct) {
                    // Clear the input field
                    setInputVal("");

                    // Add user message to the chat
                    setChatVal((prevChatVal) => [...prevChatVal, userMessage]);

                    // Delayed display of the "Thank you! Test has been done." message
                    setTimeout(() => {
                        const doneMessage = {
                            message: {
                                isDelivered: true,
                                isSent: false,
                                message: "Thank you! Test has been done.",
                            },
                            isUser: false,
                        };

                        setChatVal((prevChatVal) => [
                            ...prevChatVal,
                            doneMessage,
                        ]);
                        setTestDone(true);
                        scrollToBottom();
                    }, 1000);

                    return;
                }
            }

            const matchedQuestion = chatbotData.find(
                (data) => data.question.toLowerCase() === inputVal.toLowerCase()
            );

            if (matchedQuestion) {
                const botMessages = matchedQuestion.answer
                    .split("\n")
                    .map((line, index) => ({
                        message: {
                            isDelivered: true,
                            isSent: false,
                            message: line,
                        },
                        isUser: false,
                    }));

                setChatVal((prevChatVal) => [...prevChatVal, userMessage]);

                // Delayed display of bot messages
                setTimeout(() => {
                    setChatVal((prevChatVal) => [
                        ...prevChatVal,
                        ...botMessages,
                    ]);
                    scrollToBottom();
                }, 1000);
            } else {
                const defaultBotMessage = {
                    message: {
                        isDelivered: true,
                        isSent: false,
                        message: "I'm sorry, I don't have the answer to that.",
                    },
                    isUser: false,
                };

                setChatVal((prevChatVal) => [
                    ...prevChatVal,
                    userMessage,
                    defaultBotMessage,
                ]);

                scrollToBottom();
            }

            // Clear the input field
            setInputVal("");
        } else {
            const errorMessage = {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message:
                        "Please select your top concern first for the assessment.",
                },
                isUser: false,
            };

            setChatVal((prevChatVal) => [...prevChatVal, errorMessage]);
            scrollToBottom();
        }
    };

    const scrollToBottom = () => {
        const chatContainer = chatContainerRef.current;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    const getCategoryProduct = (productId) => {
        return categoriesMap.products.find((item) => item.id === productId);
    };

    useEffect(() => {
        // default messages when someone enters the chatroom
        const defaultMessages = [
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: `Hi${
                        loggedInUserName ? ` ${loggedInUserName}` : ""
                    }!`,
                },
                isUser: false,
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: <ProductCard />,
                },
                isUser: false,
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message:
                        "I am HealthBuddy, your intimate personal health coach.",
                },
                isUser: false,
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message:
                        "How can I help you today? What are your top concerns?",
                },
                isUser: false,
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: "1. Sexual Health",
                },
                isUser: false,
                onClick: () => startConversation("Sexual Health", "productId1"),
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: "2. Beard",
                },
                isUser: false,
                onClick: () => startConversation("Beard", "productId2"),
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: "3. Skin",
                },
                isUser: false,
                onClick: () => startConversation("Skin", "productId3"),
            },
            {
                message: {
                    isDelivered: true,
                    isSent: false,
                    message: "4. Hair Scalp",
                },
                isUser: false,
                onClick: () => startConversation("Hair Scalp", "productId4"),
            },
        ];

        setChatVal(defaultMessages);
        scrollToBottom();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [chatVal]);

    return (
        <div className="relative mx-[13.063rem] max-h-[50%]">
            <div
                className="px-[40px] overflow-y-scroll hide-scroll-bar"
                style={{ height: "300px" }}
                ref={chatContainerRef}
            >
                <div className="max-w-[100%] ml-auto">
                    {/* Render the user's message as a chat bubble */}
                    {inputVal && (
                        <div className="flex items-start justify-end m-2">
                            <div>
                                <ChatBubble message={inputVal} />
                            </div>
                        </div>
                    )}
                    <div
                        className="absolute top-0 right-0 mt-2 mr-2"
                        style={{ position: "absolute", zIndex: 1 }}
                        ref={userIconRef}
                    >
                        <UserLoginLogo
                            className="h-[2rem] w-[2rem]"
                            src={loggedInUserImage}
                        />
                    </div>
                    {/* Render the bot responses as chat bubbles */}
                    {chatVal.map((chat, idx) => (
                        <div
                            key={idx}
                            onClick={chat.onClick}
                            className={chat.onClick ? "cursor-pointer" : ""}
                        >
                            <ChatBubble
                                message={chat.message}
                                isUser={chat.isUser}
                            />
                        </div>
                    ))}
                    {/* Conditionally render the "Hello test has been done" message */}
                    {testDone && (
                        <div className="flex items-start justify-start m-2">
                            <div>
                                <ChatBubble
                                    message="Hello test has been done"
                                    isUser={false}
                                />
                            </div>
                        </div>
                    )}
                </div>
                {chatVal.length > 0 && (
                    <div
                        className="absolute top-0 left-0 mt-2 ml-2"
                        style={{ position: "absolute", zIndex: 1 }}
                        ref={botIconRef}
                    >
                        <HealthAssesmentRobotIcon className="h-[2rem] w-[2rem]" />
                    </div>
                )}
            </div>
            <div
                className="absolute right-0 w-full px-10 h-[40px]"
                style={{ position: "absolute", zIndex: 1 }}
            >
                <form onSubmit={formSubmitHandler}>
                    <input
                        placeholder="Type a message"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
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

export default ChatRoom;
