import React from "react";
import {
    FaVenusMars,
    FaMars,
    FaAssistiveListeningSystems,
    FaHandPaper,
} from "react-icons/fa";

const iconStyle = {
    marginRight: "8px",
    verticalAlign: "middle",
    fontSize: "24px",
};

const DefaultMessages = {
    messages: [
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: "Hi",
            },
            isUser: false,
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: "I am Caroline, your personal health coach",
                isFollowUp: true,
            },
            isUser: false,
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message:
                    "I will be your guide for this health assessment today",
                isFollowUp: true,
            },
            isUser: false,
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message:
                    "How can I help you today? What are your top concerns?",
                isFollowUp: true,
            },
            isUser: false,
        },
    ],
    options: [
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: (
                    <>
                        <FaVenusMars style={iconStyle} /> Sexual Health
                    </>
                ),
            },
            isUser: false,
            onClick: { flow: "Sexual Health" },
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: (
                    <>
                        <FaMars style={iconStyle} /> Penile Health
                    </>
                ),
            },
            isUser: false,
            onClick: { flow: "Penile Health" },
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: (
                    <>
                        <FaAssistiveListeningSystems style={iconStyle} /> Butt
                        Health
                    </>
                ),
            },
            isUser: false,
            onClick: { flow: "Butt Health" },
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: (
                    <>
                        <FaHandPaper style={iconStyle} /> Armpit Health
                    </>
                ),
            },
            isUser: false,
            onClick: { flow: "Armpit Health" },
        },
    ],
};

export default DefaultMessages;
