const WelcomeMessages = {
    1: {
        message: {
            isDelivered: true,
            isSent: false,
            text: "We got you with our doctor-recommended questionnaire.",
        },
        isUser: false,
    },
    2: {
        message: {
            isDelivered: true,
            isSent: false,
            text: "Will just take a few minutes of your time.",
        },
        isUser: false,
    },
    3: {
        button: {
            text: "Click here to start",
            onClick: (handleOptionClick) => () =>
                handleOptionClick("Click here to Start"),
            className: "h-10 w-full mt-2 rounded font-bold bg-white text-black",
        },
        isUser: false,
    },
};

export default WelcomeMessages;
