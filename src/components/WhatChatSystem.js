import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatChatSystem.css";

const ChatSystem = () => {
  useEffect(() => {
    const chatIcon = document.querySelector(".chat-icon");

    setTimeout(() => {
      chatIcon.style.display = "none";
    }, 90000);
  }, []);

  return (
    <div className="chat-system">
      <a
        href="https://api.whatsapp.com/send?phone=7233994264"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="chat-icon">
          <FaWhatsapp />
        </div>
      </a>
    </div>
  );
};

export default ChatSystem;
