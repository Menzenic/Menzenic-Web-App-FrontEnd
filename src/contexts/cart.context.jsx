import { createContext, useEffect, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
    const productExists = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    if (productExists)
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
})

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        )
        setCartCount(newCartCount)
    }, [cartItems])

    const value = { addItemToCart, cartItems, cartCount }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}