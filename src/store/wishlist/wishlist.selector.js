import { createSelector } from "reselect";

const selectWishlistReducer = (state) => state.wishlist;

export const selectWishlistItems = createSelector(
    [selectWishlistReducer],
    (wishlistSlice) => wishlistSlice.wishlistItems,
);

// export const selectIsPresentInWishlist = createSelector(
//     [selectWishlistReducer],
//     (wishlistSlice) => wishlistSlice.isPresentInWishlist,
// );
