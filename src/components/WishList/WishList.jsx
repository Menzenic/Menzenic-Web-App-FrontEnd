import React from "react";
import { useSelector } from "react-redux";
import { WishlistProductCard } from "../Card";
import { selectWishlistItems } from "../../store/wishlist/wishlist.selector";

const WishList = () => {
    const wishlistItemsFromStore = useSelector(selectWishlistItems);

    return (
        <section className="h-full w-max my-8 md:ml-[1.56rem] px-2 sm:px-8 md:px-16 sm:p-1">
            {wishlistItemsFromStore?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0.85rem] sm:gap-4">
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
