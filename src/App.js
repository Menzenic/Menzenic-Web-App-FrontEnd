import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Auth from "./Screens/Auth/Auth";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/AboutUs/About";
import ResetPassword from "./Screens/ResetPassword/ResetPassword";
import Cart from "./Screens/Cart/Cart";
import Profile from "./Screens/Profile/Profile";
import HealthAssessment from "./Screens/HealthAssessment/HealthAssessment";
import HealthChatbot from "./Screens/HealthChatbot/HealthChatbot";
import Products from "./Screens/Products/Products";
import ProductDetail from "./Screens/ProductDetail/ProductDetail";

const App = () => {
    const [isAuthorizationOpen, setAuthorizationOpen] = useState(false);

    const closeAuthorization = () => {
        setAuthorizationOpen(false);
    };

    const openAuthorization = () => {
        setAuthorizationOpen(true);
    };

    return (
        <Router>
            <div className="top-0 z-10">
                <Navbar />
            </div>
            {isAuthorizationOpen && <Auth onClose={closeAuthorization} />}
            <Routes>
                <Route path="/" element={<AllRoutes />} />
                <Route
                    path="/login"
                    element={<Auth onLogin={openAuthorization} />}
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                    path="/healthassessment"
                    element={<HealthAssessment />}
                />
                <Route path="/health-chatbot" element={<HealthChatbot />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productdetail/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
