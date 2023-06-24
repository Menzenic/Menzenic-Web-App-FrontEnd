import clsx from "clsx"
import { useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"

const ProductCard = ({product = {
    id: null,
    likeicon: null,
    image: null,
    title: null,
    rate: null,
}}) => {
    const {likeicon, image, title, rate } = product
    const { cartitems, addItemToCart } = useContext(CartContext)
    const addItemToCartHandler = () => {
        console.log('hit')
        console.log('product', product)
        addItemToCart(product)
    }

    return (
        <div className="flex flex-col bg-white shadow-xl w-[18.77rem] h-[22.0625rem] items-center relative m-10">
            {likeicon ? (
                <div
                    className={clsx(
                        "absolute top-2 right-2",
                        "hover:cursor-pointer"
                    )}
                >
                    {likeicon}
                </div>
            ) : (
                ""
            )}
            {image ? (
                <img
                    className="w-[6.625rem] h-[10.25rem]"
                    src={image}
                    alt={title}
                />
            ) : (
                <div>IMAGE</div>
            )}
            {title ? (
                <p className="text-2xl mt-4">{title}</p>
            ) : (
                <p>HEADING</p>
            )}
            {rate ? (
                <p className="text-xl mt-2">{rate}</p>
            ) : (
                <p>200</p>
            )}
            <button
                className={clsx(
                    "mt-4 border rounded-md px-6 py-2",
                    "hover:bg-black hover:text-white",
                    "transition-all duration-200"
                )}
                onClick={addItemToCartHandler}
            >
                ADD TO CART
            </button>
        </div>
    )
}

export default ProductCard
