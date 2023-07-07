import React from "react"
import { Routes, Route } from "react-router-dom"

import { Navigation, Auth, Home, Products, AboutUs, Profile } from "./routes"
import { Blogs, OrderHistory, PersonalInfo, WishList } from "./components"
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
                <Route path="/product-details/:id" element={<ProductDetail />} />
                <Route path="/auth" element={<Auth />} />   
                <Route path="/blogs" element={<Blogs />}/>
            </Route>
        </Routes>
    )
}

export default App
