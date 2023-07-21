import React from "react";
import {
    FaHeart,
    FaClinicMedical,
    FaAssistiveListeningSystems,
    FaHandMiddleFinger,
} from "react-icons/fa";

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
            },
            isUser: false,
        },
        {
            message: {
                isDelivered: true,
                isSent: false,
                message:
                    "I will be your guide for this health assessment today",
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
    ],
    options: [
        {
            message: {
                isDelivered: true,
                isSent: false,
                message: (
                    <>
                        <FaHeart /> 1. Sexual Health
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
                        <FaClinicMedical /> 2. Penile Health
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
                        <FaAssistiveListeningSystems /> 3. Butt Health
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
                        <FaHandMiddleFinger /> 4. Armpit Health
                    </>
                ),
            },
            isUser: false,
            onClick: { flow: "Armpit Health" },
        },
    ],
};

export default DefaultMessages;
