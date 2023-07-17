import { WISHLIST_ACTION_TYPES } from "./wishlist.types";

/**
 * Utility function to add to wishlist
 */
const addWishlistItem = (wishlistItems, productToAdd) => {
    if (
        wishlistItems.some(
            (wishlistItem) => wishlistItem.id === productToAdd.id,
        )
    ) {
        return wishlistItems;
    }

    return [...wishlistItems, { ...productToAdd }];
};

/**
 * Utility function to remove from wishlist
 */
const removeWishlistItem = (wishlistItems, productToAdd) => {
    if (
        !wishlistItems.some(
            (wishlistItem) => wishlistItem.id === productToAdd.id,
        )
    ) {
        console.log('here')
        return wishlistItems;
    }

    console.log('herererereerr:', wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== productToAdd.id,
    ))

    return wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== productToAdd.id,
    );
};

/**
 * Action creator to add item to wishlist
 */
export const addItemToWishlist = (wishlistItems, productToAdd) => {
    const newWishlistItems = addWishlistItem(wishlistItems, productToAdd);
    return {
        type: WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS,
        payload: newWishlistItems,
    };
};

/**
 * Action creator to remove item from wishlist
 */
export const removeItemFromWishlist = (wishlistItems, productToAdd) => {
    const newWishlistItems = removeWishlistItem(wishlistItems, productToAdd);
    return {
        type: WISHLIST_ACTION_TYPES.SET_WISHLIST_ITEMS,
        payload: newWishlistItems,
    };
};