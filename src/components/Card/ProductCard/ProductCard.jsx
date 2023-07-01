import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts/cart.context";
import { WishListIcon } from "../../../utils/assets";
import { WishListedIcon } from "../../../utils/assets";
import { WishListContext } from "../../../contexts/wishlist.context";

const ProductCard = ({
    product = { id: null, image: null, title: null, rate: null },
    ProductSize,
}) => {
    const { wishList, addItemToWishList, checkItem } =
        useContext(WishListContext);
    const { addItemToCart } = useContext(CartContext);

    const [bool, setBool] = useState(false);
    const { image, title, rate, id } = product;

    const addItemToCartHandler = () => {
        addItemToCart(product);
    };

    const addToWishListHelper = () => {
        addItemToWishList(id);
    };

    useEffect(() => {
        setBool(checkItem(id));
    }, [wishList, id, checkItem]);

    return (
        <div
            className={clsx(
                "flex flex-col rounded-xl bg-white shadow-2xl shadow-gray-800 w-[18.77rem] min-h-[20.0625rem] items-center relative m-10",
                ProductSize
            )}
        >
            <div
                className={clsx(
                    "absolute top-5 right-5",
                    "hover:cursor-pointer"
                )}
                onClick={() => addToWishListHelper()}
            >
                {bool ? <WishListedIcon /> : <WishListIcon />}
            </div>
            {image ? (
                <img
                    className="w-[6.625rem] h-[10.25rem]"
                    src={image}
                    alt={title}
                />
            ) : (
                <div>IMAGE</div>
            )}
            {title ? <p className="text-xl mt-4">{title}</p> : <p>HEADING</p>}
            {rate ? <p className="text-xl mt-2">{rate}</p> : <p>200</p>}
            <div className="flex w-full justify-between px-5 mt-4">
                <button
                    className={clsx(
                        "border border-[#A4A4A4] rounded-md px-6 py-2",
                        "hover:bg-black hover:text-white",
                        "transition-all duration-200"
                    )}
                    onClick={addItemToCartHandler}
                >
                    Add to cart
                </button>
                <button
                    className={clsx(
                        "border rounded-md px-8 py-2",
                        "bg-[#0D0A0A] text-white",
                        "transition-all duration-200"
                    )}
                    onClick={addItemToCartHandler}
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
