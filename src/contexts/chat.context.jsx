import { createContext, useContext, useEffect, useState } from "react";
import { getChatFromFirebase, storeChatIntoFirebase } from "../utils/firebase/firebase.utils";
import { UserContext } from "./user.context";

export const ChatContext = createContext({
    chatVal: [],
    chatStore: () => {}
})

export const ChatProvider = ({ children }) => {
    const { currentUser } = useContext(UserContext)
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