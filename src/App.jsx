import React from "react"
import { Routes, Route } from "react-router-dom"

import { Navigation, Auth, Home, Products, AboutUs, Profile } from "./routes"
import { OrderHistory, PersonalInfo, WishList } from "./components"
import ProductDetail from "./Screens/ProductDetail/ProductDetail"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />}>
                    <Route index element={<PersonalInfo />} />
                    <Route path='order-history' element={<OrderHistory />} />
                    <Route path='wishlist' element={<WishList />}/>
                </Route>
                <Route path="/product-details" element={<ProductDetail />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default App
