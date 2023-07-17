import React from "react";
import { useSelector } from "react-redux";

import { WishlistProductCard } from "../Card";

import { selectWishlistItems } from "../../store/wishlist/wishlist.selector";

const WishList = () => {
    const wishlistItemsFromStore = useSelector(selectWishlistItems);

    return (
        <section className="h-full w-max ml-[1.56rem]">
            {wishlistItemsFromStore?.length > 0 ? (
                <div className="grid grid-cols-4 gap-4">
                    {wishlistItemsFromStore.map((wishlistItem) => {
                        return (
                            <WishlistProductCard
                                key={wishlistItem.id}
                                product={wishlistItem}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="h-full w-full flex justify-center items-center text-3xl text-white">
                    No items added to wishlist
                </div>
            )}
        </section>
    );
};

export default WishList;
