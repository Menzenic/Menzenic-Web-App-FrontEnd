import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Auth from "./Screens/Auth/Auth";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/AboutUs/About";
import ResetPassword from "./Screens/ResetPassword/ResetPassword";

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
            <div className="sticky top-0 z-10">
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
            </Routes>
        </Router>
    );
};

export default App;
