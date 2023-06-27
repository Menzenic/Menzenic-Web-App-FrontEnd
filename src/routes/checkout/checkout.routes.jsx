import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext)

    return (
        <div>
            Checkout Page
            <div>
            </div>
        </div>
    )
}

export default Checkout