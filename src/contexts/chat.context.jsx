import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getChatFromFirebase, storeChatIntoFirebase } from "../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../store/user/user.selector";

export const ChatContext = createContext({
    chatVal: [],
    chatStore: () => {}
})

export const ChatProvider = ({ children }) => {
    const currentUser = useSelector(selectCurrentUser)

    const [chatVal, setChatVal] = useState([])

    const chatStore = async (message) => {
        await storeChatIntoFirebase(message)

        const updatedChat = await getChatFromFirebase()
        setChatVal(updatedChat)
    }

    useEffect(() => {
        if(currentUser) {
            (async function() {
                const res = await getChatFromFirebase()
                setChatVal(res)
            })();
        }
    }, [currentUser])
    
    const value = { chatVal, chatStore }

    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    )
}