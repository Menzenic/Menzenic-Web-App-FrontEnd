import React, { useContext, useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { WishListedIcon } from "../../utils/assets";
import { Strings } from "../../utils/constants/Strings/Strings";
import { WishListContext } from "../../contexts/wishlist.context";
import { CategoriesContext } from "../../contexts/categories.context";

const WishList = () => {
    const { wishList, removeItemFromWishList } = useContext(WishListContext);
    const { categoriesMap } = useContext(CategoriesContext);

    const [noItems, setNoItems] = useState("");
    const [intersectedProducts, setIntersectedProducts] = useState([]);

    const getCategoryProduct = useMemo(() => {
        return (productId) => {
            return categoriesMap.products.find((item) => item.id === productId);
        };
    }, [categoriesMap.products]);

    useEffect(() => {
        if (wishList?.length > 0) {
            const intersection = wishList.filter((product) =>
                categoriesMap.products.some((item) => item.id === product.id)
            );
            setIntersectedProducts(intersection);
        } else {
            setNoItems("Add items to wishlist");
        }
    }, [wishList, categoriesMap.products]);

    const handleRemoveFromWishlist = (productId) => {
        removeItemFromWishList(productId);
        setIntersectedProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    };

    return (
        <section className="wishlist-container">
            <p className="wishlist-title text-3xl text-white font-bold mx-16 label-arial">
                {Strings.WISHLIST_TITLE}
            </p>
            <div className="wishlist-items grid grid-cols-4">
                {intersectedProducts.length > 0 ? (
                    intersectedProducts.map((product, index) => {
                        const categoryProduct = getCategoryProduct(product.id);

                        if (categoryProduct) {
                            const { image, title, price } = categoryProduct;

                            return (
                                <div
                                    className="flex flex-col rounded-xl bg-white shadow-2xl shadow-gray-800 w-[14.77rem] min-h-[19.0625rem] items-center relative mx-1 my-10 hover:shadow-white hover:scale-105 cursor-pointer"
                                    key={index}
                                >
                                    <div
                                        className={clsx(
                                            "absolute top-5 right-5",
                                            "hover:cursor-pointer"
                                        )}
                                        onClick={() =>
                                            handleRemoveFromWishlist(product.id)
                                        }
                                    >
                                        <WishListedIcon />
                                    </div>
                                    <img
                                        className="w-[6.625rem] h-[10.25rem]"
                                        src={image}
                                        alt={title}
                                    />
                                    <p className="text-xl mt-4">{title}</p>
                                    <p className="text-xl mt-2">{price}</p>
                                    <div className="flex w-full justify-between px-2 mt-4 pb-4">
                                        <button
                                            className={clsx(
                                                "border border-[#A4A4A4] rounded-md px-4 py-2",
                                                "hover:bg-black hover:text-white",
                                                "transition-all duration-200"
                                            )}
                                            // onClick={addItemToCartHandler}
                                        >
                                            Add to cart
                                        </button>
                                        <button
                                            className={clsx(
                                                "border rounded-md px-4 py-2",
                                                "bg-[#0D0A0A] text-white",
                                                "transition-all duration-200"
                                            )}
                                            // onClick={buyNowHandler}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })
                ) : (
                    <p>{noItems}</p>
                )}
            </div>
        </section>
    );
};

export default WishList;
