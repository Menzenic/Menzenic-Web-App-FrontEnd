import React from "react";
import clsx from "clsx";

const Cart = () => {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        // Add more products as needed
    ];

    const userProfile = {
        name: "John Doe",
        email: "johndoe@example.com",
        // Add more user profile data as needed
    };

    return (
        <div className="flex bg-black text-white">
            <div className="w-1/2 p-4">
                <h2 className="text-xl font-bold">Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-xl font-bold">User Profile</h2>
                <div>
                    <p>Name: {userProfile.name}</p>
                    <p>Email: {userProfile.email}</p>
                    {/* Add more user profile information */}
                </div>
            </div>
        </div>
    );
};

export default Cart;
