import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"


import { Navigation, Auth, Home, Products } from "./routes"
// import Auth from "./Screens/Auth/Auth"
// import Blogs from "./components/Blogs/Blogs"
// import About from "./components/AboutUs/About"
// import ResetPassword from "./Screens/ResetPassword/ResetPassword"
// import Cart from "./Screens/Cart/Cart"
// import Profile from "./Screens/Profile/Profile"
// import Home from "./routes/home/home.routes"

const Product = () => {
    return <h1 className="flex h-screen w-full items-center justify-center">PRODUCT PAGE</h1>
}

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/blogs" element={<Blogs />} /> */}
                    <Route path="/products" element={<Products />} />
                </Route>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </div>
    )
}

export default App
