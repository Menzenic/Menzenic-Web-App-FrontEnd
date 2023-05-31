import React, { useState } from "react";
import "../styles/ChatSystem.css";

const ChatSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      // Add user message
      setMessages([...messages, { text: inputValue, isUser: true }]);
      // Simulate AI response
      setTimeout(() => {
        let response = "";
        if (inputValue.toLowerCase().includes("menzenic")) {
          response = "MenZenic is a men health care product.";
        } else if (inputValue.toLowerCase().includes("cost")) {
          response =
            "The cost of each product may vary. Please check our website for specific pricing information.";
        } else {
          response = "I am sorry, but I could not understand your question.";
        }
        setMessages([...messages, { text: response, isUser: false }]);
      }, 500);
      setInputValue("");
    }
  };

  return (
    <div className={`chat-system ${isOpen ? "open" : ""}`}>
      <button className="chat-toggle-button" onClick={toggleChat}>
        Chat
      </button>
      <div className="chat-content">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.isUser ? "user-message" : "ai-message"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatSystem;
