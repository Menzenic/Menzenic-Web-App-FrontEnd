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

import { featuredProductsVariant, productVariant } from "./ProductCard.styles";
import { WishListedIcon, WishListedProductCard } from "../../../utils/assets";
import { addToOrders } from "../../../utils/firebase/firebase.utils";
import { addItemToOrders, fetchOrdersAsync } from "../../../store/orders/orders.action";
import { selectOrders } from "../../../store/orders/orders.selector";

const ProductCard = React.memo(
    ({
        product = {
            id: null,
            image: null,
            title: null,
            price: null,
        },
        variant,
    }) => { 
        console.log('product:', product)

        const dispatch = useDispatch();

        const orders = useSelector(selectOrders)
        const wishlistItems = useSelector(selectWishlistItems);
        const cartItems = useSelector(selectCartItems);

        const [dimensions, setDimensions] = useState(productVariant);
        const [bool, setBool] = useState({
            isPresentInCart: false,
            isPresentInWishList: false,
            hoverWishList: false,
        });

        const addItemToOrdersHandler = () => {
            dispatch(addItemToOrders(orders, product))
            // dispatch(fetchOrdersAsync(product));
        };

        useEffect(() => {
            if (variant === "product" && dimensions !== productVariant) {
                setDimensions(productVariant);
            } else if (
                variant === "featured" &&
                dimensions !== featuredProductsVariant
            ) {
                setDimensions(featuredProductsVariant);
            }
        }, [variant, dimensions]);

        useEffect(() => {
            setBool((prevBool) => ({
                ...prevBool,
                isPresentInCart: cartItems.find(
                    (cartItem) => cartItem.id === product.id,
                ),
            }));
        }, [cartItems, product]);

        useEffect(() => {
            const isPresent = wishlistItems.find(
                (wishlistItem) => wishlistItem.id === product.id,
            );
            setBool((prevBool) => ({
                ...prevBool,
                isPresentInWishList: isPresent,
            }));
        }, [wishlistItems, product]);

        return (
            <div
                className={clsx("flex flex-col bg-white items-center relative")}
                style={{
                    boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
                    height: dimensions.cardSize.height,
                    width: dimensions.cardSize.width,
                    borderRadius: dimensions.cardBorderRadius,
                }}
            >
                <div
                    className={clsx(
                        "absolute top-5 right-5",
                        "hover:cursor-pointer",
                    )}
                    onClick={() => {
                        bool.isPresentInWishList
                            ? dispatch(
                                  removeItemFromWishlist(
                                      wishlistItems,
                                      product,
                                  ),
                              )
                            : dispatch(
                                  addItemToWishlist(wishlistItems, product),
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
                            height={dimensions.wishListIconSize.height}
                            width={dimensions.wishListIconSize.width}
                        />
                    ) : bool.hoverWishList ? (
                        <WishListedProductCard
                            height={dimensions.wishListIconSize.height}
                            width={dimensions.wishListIconSize.width}
                        />
                    ) : (
                        <WishListedIcon
                            height={dimensions.wishListIconSize.height}
                            width={dimensions.wishListIconSize.width}
                        />
                    )}
                </div>
                <Link to={`/product-details/${product.id}`}>
                    <img
                        style={{
                            height: dimensions.imageSize.height,
                            width: dimensions.imageSize.width,
                            marginTop: dimensions.marginTopImage,
                        }}
                        src={product.image}
                        alt={product.title}
                    />
                </Link>
                <Link to={`/product-details/${product.id}`}>
                    <p
                        style={{
                            fontSize: dimensions.titleFontSize,
                            marginTop: dimensions.marginTopImageTitle,
                        }}
                    >
                        {product.title}
                    </p>
                </Link>

                <p
                    style={{
                        fontSize: dimensions.priceFontSize,
                        marginTop: dimensions.marginTopTitlePrice,
                    }}
                >
                    {product.price}
                </p>
                <div
                    className="flex w-full px-3"
                    style={{
                        marginTop: dimensions.marginTopPriceButton,
                        fontSize: dimensions.buttonFontSize,
                    }}
                >
                    <button
                        className={clsx(
                            "flex-grow border border-[#A4A4A4] rounded-md mr-1",
                            "hover:bg-black hover:text-white",
                            bool.isPresentInCart && "bg-black text-white",
                        )}
                        onClick={() => {
                            bool.isPresentInCart
                                ? dispatch(
                                      clearItemFromCart(cartItems, product),
                                  )
                                : dispatch(addItemToCart(cartItems, product));
                        }}
                        style={{
                            height: dimensions.buttonSize.height,
                            width: dimensions.buttonSize.width,
                        }}
                    >
                        Add to cart
                    </button>
                    <button
                        className={clsx(
                            "flex-grow border rounded-md",
                            "bg-[#0D0A0A] text-white",
                        )}
                        style={{
                            height: dimensions.buttonSize.height,
                            width: dimensions.buttonSize.width,
                        }}
                        // onClick={() => addItemToCartHandler(product)}
                        onClick={() => addItemToOrdersHandler()}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        );
    },
);

export default ProductCard;
