import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { UserProvider } from "./contexts/user.context"
import { CategoriesProvider } from "./contexts/categories.context"
import { CartProvider } from "./contexts/cart.context"
// import { DialogProvider } from "./contexts/dialogs.context"
import { WishListProvider } from "./contexts/wishlist.context"
import { ChatProvider } from "./contexts/chat.context"

import "./index.css"

const render = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <UserProvider>
                    <CategoriesProvider>
                        <CartProvider>
                            <WishListProvider>
                                <ChatProvider>
                                    <App />
                                </ChatProvider>
                            </WishListProvider>
                        </CartProvider>
                    </CategoriesProvider>
                </UserProvider>
            </BrowserRouter>
        </React.StrictMode>
    )
}
render()
