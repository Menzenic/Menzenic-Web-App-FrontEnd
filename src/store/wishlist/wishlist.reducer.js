import { WISHLIST_ACTION_TYPES } from "./wishlist.types";

const WISHLIST_INTITIAL_STATE = {
    wishlistItems: [],
};

export const wishlistReducer = (
    state = WISHLIST_INTITIAL_STATE,
    action = {},
) => {
    const { type, payload } = action;

    switch (type) {
        case WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS:
            return {
                ...state,
                wishlistItems: payload,
            };
        default:
            return state;
    }
};
