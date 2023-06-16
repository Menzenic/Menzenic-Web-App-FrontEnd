import React from "react";
import { WishListedIcon } from "../../utils/assets";
import ProductsData from "../../data/ProductsData";
import { Strings } from "../../utils/constants/Strings/Strings";
import { ProductCard } from "../../components/Card";

const WishList = () => {
    const visibleProducts = ProductsData.slice(0, 2);

    return (
        <section className="Wishlist-container pl-10 py-4 ml-6">
            {/* <p className="wishlist-title text-3xl text-white font-bold mx-16 label-arial">
                {Strings.WISHLIST_TITLE}
            </p> */}
            <div className="wishlist-items flex w-full  justify-between pl-8 py-4 ml-6">
                <div className="wishlist-detail flex flex-wrap items-center w-full justify-start">
                    {visibleProducts.map((product) => (
                        <div className="w-1/2">
                            <ProductCard
                                likeicon={<WishListedIcon />}
                                image={product.image}
                                title={product.title}
                                rate={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WishList;
