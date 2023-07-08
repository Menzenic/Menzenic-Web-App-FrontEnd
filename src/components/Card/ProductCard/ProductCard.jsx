import { useContext, useEffect, useState } from "react"
import clsx from "clsx"

import { CartContext } from "../../../contexts/cart.context"
import { WishListedIcon, WishListedProductCard } from "../../../utils/assets"
import { WishListContext } from "../../../contexts/wishlist.context"

const ProductCard = ({
    product = {
        id: null,
        image: null,
        title: null,
        price: null,
    },
    card = {
        height: "18.375rem",
        width: "16.125rem",
        minWidth: "16.125rem",
    },
    imageSize = {
        height: "7.875rem",
        width: "5.125rem",
    },
    wishListIcon = {
        height: "1.5rem",
        width: "1.75rem",
    },
    titleFontSize = "26px",
    priceFontSize = "22px",
}) => {
    const [bool, setBool] = useState(false)

    const { wishList, addItemToWishList, checkItem } =
        useContext(WishListContext)
    const { addItemToCart } = useContext(CartContext)

    useEffect(() => {
        setBool(checkItem(product.id))
    }, [wishList, product.id, checkItem])

    return (
        <div
            className={clsx(
                "flex flex-col bg-white min-w-[16.125rem] min-h-[18.375rem] items-center relative"
            )}
            style={{
                boxShadow: "19px 14px 77px 0px rgba(0, 0, 0, 0.11)",
                height: card.height,
                width: card.width,
                minWidth: card.minWidth,
            }}
        >
            <div
                className={clsx(
                    "absolute top-5 right-5",
                    "hover:cursor-pointer"
                )}
                onClick={() => addItemToWishList(product.id)}
            >
                <div
                    style={{
                        height: wishListIcon.height,
                        width: wishListIcon.width,
                    }}
                >
                    {bool ? <WishListedIcon /> : <WishListedProductCard />}
                </div>
            </div>
            <img
                className={clsx("w-[6.625rem] h-[10.25rem] mt-2")}
                style={{
                    height: imageSize.height,
                    width: imageSize.width,
                }}
                src={product.image}
                alt={product.title}
            />
            <p
                className={clsx("text-[26px] mt-3")}
                style={{
                    fontSize: titleFontSize,
                }}
            >
                {product.title}
            </p>

            <p
                className={clsx("text-[22px] mt-2")}
                style={{
                    fontSize: priceFontSize,
                }}
            >
                {product.price}
            </p>
            <div className="flex w-full px-3 mt-3 mb-6">
                <button
                    className={clsx(
                        "flex-grow border border-[#A4A4A4] rounded-md py-2 mr-1",
                        "hover:bg-black hover:text-white",
                        "transition-all duration-200"
                    )}
                    onClick={() => addItemToCart(product)}
                >
                    Add to cart
                </button>
                <button
                    className={clsx(
                        "flex-grow border rounded-md py-2",
                        "bg-[#0D0A0A] text-white",
                        "transition-all duration-200"
                    )}
                    onClick={() => addItemToCart(product)}
                >
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ProductCard
