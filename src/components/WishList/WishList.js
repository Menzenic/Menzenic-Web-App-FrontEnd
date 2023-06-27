import React from "react";
import { WishListedIcon } from "../../utils/assets";
import ProductsData from "../../data/ProductsData";
import { Strings } from "../../utils/constants/Strings/Strings";
import { ProductCard } from "../Card";

const WishList = () => {
    const visibleProducts = ProductsData.slice(0, 8);

    return (
        <section className="wishlist-container">
            {/* <p className="wishlist-title text-3xl text-white font-bold mx-16 label-arial">
        {Strings.WISHLIST_TITLE}
      </p> */}
            <div className="wishlist-items grid grid-cols-4 gap-4">
                {visibleProducts.map((product) => (
                    <div className="p-2" key={product.id}>
                        <ProductCard
                            likeicon={<WishListedIcon />}
                            image={product.image}
                            title={product.title}
                            rate={product.price}
                            productClassName="w-44 h-48"
                            imageClassName="w-14 h-18"
                            titleClassName="text-sm mt-2"
                            buttonClassName="px-2 py-1 text-sm bg-gray-200 rounded-md mt-2"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WishList;
