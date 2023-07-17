import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const productExists = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id,
    );

    if (productExists)
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem,
        );

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id,
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== productToRemove.id,
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
    );
};
const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
export const clearItemFromCart = (cartItems, itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const setIsCartOpen = (bool) => ({
    type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
    payload: bool,
});
