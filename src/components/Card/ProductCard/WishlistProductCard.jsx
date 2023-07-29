import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../../store/cart/cart.selector";
import { selectWishlistItems } from "../../../store/wishlist/wishlist.selector";
import {
    addItemToCart,
    clearItemFromCart,
} from "../../../store/cart/cart.action";
import {
    addItemToWishlist,
    removeItemFromWishlist,
} from "../../../store/wishlist/wishlist.action";

import { WishListedIcon, WishListedProductCard } from "../../../utils/assets";

const WishlistProductCard = React.memo(
    ({
        product = {
            id: null,
            image: null,
            title: null,
            price: null,
        },
    }) => {
        const dispatch = useDispatch();

        const wishlistItems = useSelector(selectWishlistItems);
        const cartItems = useSelector(selectCartItems);

        const [bool, setBool] = useState({
            isPresentInCart: false,
            isPresentInWishList: false,
            hoverWishList: false,
        });

        useEffect(() => {
            setBool((prevBool) => ({
                ...prevBool,
                isPresentInCart: cartItems.find(
                    (cartItem) => cartItem.id === product.id
                ),
            }));
        }, [cartItems, product]);

        useEffect(() => {
            const isPresent = wishlistItems.find(
                (wishlistItem) => wishlistItem.id === product.id
            );
            setBool((prevBool) => ({
                ...prevBool,
                isPresentInWishList: isPresent,
            }));
        }, [wishlistItems, product]);

        return (
            <div
                className={clsx(
                    "flex flex-col bg-white items-center relative w-[10.55rem] sm:w-[12.25rem] "
                )}
                style={{
                    boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
                    height: "12.25rem",
                }}
            >
                <div
                    className={clsx(
                        "absolute top-5 right-5",
                        "hover:cursor-pointer"
                    )}
                    onClick={() => {
                        bool.isPresentInWishList
                            ? dispatch(
                                  removeItemFromWishlist(wishlistItems, product)
                              )
                            : dispatch(
                                  addItemToWishlist(wishlistItems, product)
                              );
                    }}
                    onMouseEnter={() => {
                        setBool((prevBool) => ({
                            ...prevBool,
                            hoverWishList: true,
                        }));
                    }}
                    onMouseLeave={() => {
                        setBool((prevBool) => ({
                            ...prevBool,
                            hoverWishList: false,
                        }));
                    }}
                >
                    {bool.isPresentInWishList ? (
                        <WishListedProductCard
                            height={"0.875rem"}
                            width={"1rem"}
                        />
                    ) : bool.hoverWishList ? (
                        <WishListedProductCard
                            height={"0.875rem"}
                            width={"1rem"}
                        />
                    ) : (
                        <WishListedIcon height={"0.875rem"} width={"1rem"} />
                    )}
                </div>
                <Link to={`/product-details/${product.id}`}>
                    <img
                        style={{
                            height: "5.375rem",
                            width: "3.5rem",
                            marginTop: "0.44rem",
                        }}
                        src={product.image}
                        alt={product.title}
                    />
                </Link>
                <Link to={`/product-details/${product.id}`}>
                    <p
                        style={{
                            fontSize: "0.875rem",
                            marginTop: "0.31rem",
                        }}
                    >
                        {product.title}
                    </p>
                </Link>

                <p
                    style={{
                        fontSize: "0.875rem",
                        marginTop: "0.25rem",
                    }}
                >
                    {product.price}
                </p>
                <div
                    className="flex w-full px-3"
                    style={{
                        marginTop: "0.5rem",
                        fontSize: "0.75rem",
                    }}
                >
                    <button
                        className={clsx(
                            "flex-grow border border-[#A4A4A4] rounded-md mr-1",
                            "hover:bg-black hover:text-white",
                            bool.isPresentInCart && "bg-black text-white"
                        )}
                        onClick={() => {
                            bool.isPresentInCart
                                ? dispatch(
                                      clearItemFromCart(cartItems, product)
                                  )
                                : dispatch(addItemToCart(cartItems, product));
                        }}
                        style={{
                            height: "1.937rem",
                            width: "5.125rem",
                        }}
                    >
                        {bool.isPresentInCart ? "Added" : "Add to cart"}
                    </button>
                    <button
                        className={clsx(
                            "flex-grow border rounded-md",
                            "bg-[#0D0A0A] text-white"
                        )}
                        style={{
                            height: "1.937rem",
                            width: "5.125rem",
                        }}
                        // onClick={() => addItemToCartHandler(product)}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        );
    }
);

export default WishlistProductCard;
