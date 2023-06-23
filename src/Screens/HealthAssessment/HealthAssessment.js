import React, { useEffect } from "react";
import { Chatbot, addResponseMessage } from "react-chatbot-kit";

const HealthAssessment = () => {
    useEffect(() => {
        addResponseMessage("Hello! How can I assist you today?");
    }, []);

    const handleNewUserMessage = (newMessage) => {
        // Here, you can implement the logic to handle user messages and provide responses
        const response = generateResponse(newMessage);
        addResponseMessage(response);
    };

    const generateResponse = (message) => {
        // Add your logic to generate appropriate responses based on user messages
        if (message.toLowerCase().includes("hello")) {
            return "Hello there!";
        } else if (message.toLowerCase().includes("how are you")) {
            return "I'm a chatbot, so I'm always ready to assist!";
        } else if (message.toLowerCase().includes("thank you")) {
            return "You're welcome!";
        } else {
            return "I'm sorry, but I'm not programmed to answer that question.";
        }
    };

    return (
        <div>
            <h1>Health Assessment Page</h1>
            <Chatbot
                handleNewUserMessage={handleNewUserMessage}
                botDelay={500}
                speechSynthesis={{ enable: true, lang: "en" }} // Optional: Enable speech synthesis
            />
        </div>
    );
};

export default HealthAssessment;
