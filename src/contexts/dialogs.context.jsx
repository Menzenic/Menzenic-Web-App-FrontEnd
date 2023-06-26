import { createContext, useState } from "react"

export const DialogContext = createContext({
    logInDialog: false,
    signUpDialog: false,
})

export const DialogProvider = ({ children }) => {
    const [dialogState, setDialogState] = useState(false)
    const value = { dialogState, setDialogState }

    return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
}
