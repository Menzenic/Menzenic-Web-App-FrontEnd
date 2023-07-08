import React, { useState } from "react";
import { ProductCard } from "../../components/Card";
import { WishListIcon } from "../../utils/assets";
import ProductsData from "../../data/ProductsData";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
    const [cart, setCart] = useState([]);

    const visibleProducts = ProductsData.slice(0, 5);

    const handleAddToCart = (product) => {
        if (cart.length < 5) {
            setCart([...cart, product]);
        }
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <div className="newpage-container">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                    {visibleProducts.map((product) => (
                        <a
                            key={product.id}
                            href={`/product/${product.name}`} // Assuming the product name is part of the URL
                        >
                            <ProductCard
                                likeicon={<WishListIcon />}
                                image={product.image}
                                title={product.title}
                                rate={product.price}
                                onAddToCart={() => handleAddToCart(product)}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className="cart-section bg-gray-100 py-8">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Cart</h2>
                    <p className="mb-4">
                        Number of products in cart: {cart.length}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded shadow-md p-4"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover"
                                    />
                                    <button
                                        className="text-red-500 font-semibold"
                                        onClick={() =>
                                            handleRemoveFromCart(item.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                                <p className="font-bold">{item.title}</p>
                                <p>${item.price}</p>
                            </div>
                        ))}
                    </div>
                    {cart.length > 0 && (
                        <div className="mt-8 flex items-center justify-between">
                            <p className="text-lg">
                                Total items: {cart.length}
                            </p>
                            <p className="text-lg">
                                Total Price: ${totalPrice}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
