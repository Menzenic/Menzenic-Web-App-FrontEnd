import { createContext, useState } from "react"

export const DialogContext = createContext({
    dialog: false,
    setDialog: () => null
})

export const DialogProvider = ({ children }) => {
    const [dialog, setDialog] = useState(false)
    const value = { dialog, setDialog }

    return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
}
