import React from "react"
import { Routes, Route } from "react-router-dom"

import { Navigation, Auth, Home, Products, AboutUs, Profile } from "./routes"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default App
