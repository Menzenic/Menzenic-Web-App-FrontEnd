import React, { useContext, useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { WishListedIcon } from "../../utils/assets";
import { ProductCard } from "../Card";
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
                            return (
                                <ProductCard
                                    key={index}
                                    product={categoryProduct}
                                    onRemove={() =>
                                        handleRemoveFromWishlist(product.id)
                                    }
                                    ProductSize="w-[12.25rem] h-[12.25rem]"
                                />
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
