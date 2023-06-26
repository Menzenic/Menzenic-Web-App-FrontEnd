import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Products from "../../components/FeatureProducts/FeatureProducts";
import ProductQuality from "../../components/ProductQuality/ProductQuality";
import Ingredients from "../../components/Ingredients/Ingredients";
import WhyMenzenic from "../../components/WhyMenzenic/WhyMenzenic";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";
// import Ingredients from "./components/Ingredients";
// import About from "./components/About";
// import ChatSystem from "./components/ChatSystem";
// import WhatChatSystem from "./components/WhatChatSystem";
// import BestSellers from "./components/BestSellers";

function Home() {
    return (
        <div className="home">
            <Header />
            <Products />
            <ProductQuality />
            {/* <Ingredients /> */}
            <WhyMenzenic />
            <Testimonials />
            <Blogs />
            <Footer />
            {/* <About /> */}
            {/* <BestSellers /> */}
            {/* <Ingredients /> */}
            {/* <ChatSystem /> */}
            {/* <WhatChatSystem /> */}
        </div>
    );
}

export default Home;
