import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Auth from "../Screens/Auth/Auth";
import Blogs from "../components/Blogs/Blogs";
import About from "../components/AboutUs/About";
import Cart from "../Screens/Cart/Cart";
import ProductDetail from "../Screens/ProductDetail/ProductDetail";
import ResetPassword from "../Screens/ResetPassword/ResetPassword";
import HealthAssessment from "../Screens/HealthAssessment/HealthAssessment";
import Products from "../Screens/Products/Products";

const AllRoutes = () => {
    const location = useLocation();
    const isAuthorizationOpen = location.pathname === "/login";

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/productdetail/:id" element={<ProductDetail />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/healthassessment"
                    element={<HealthAssessment />}
                />
                <Route path="/products" element={<Products />} />
            </Routes>

            {isAuthorizationOpen && <Auth />}
        </>
    );
};

export default AllRoutes;
