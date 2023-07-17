import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems,
);

export const selectCartCount = createSelector([selectCartItems], (cartitems) =>
    cartitems.reduce((total, cartItem) => total + cartItem.quantity, 0),
);

export const selectCartTotal = createSelector([selectCartItems], (cartitems) =>
    cartitems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0,
    ),
);

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isCartOpen,
);
