import { Routes, Route } from "react-router-dom"

import Blogs from "../../components/Blogs"
import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"
import ProductQuality from "../../components/ProductQuality"
import Products from "../../components/Products"
import Testimonials from "../../components/Testimonials"

import Navigation from "../navigation/navigation.component"
import Auth from "../auth/auth.component"
import Profile from "../profile/profile.component"
import Shop from "../shop/shop.component"
import Checkout from "../checkout/checkout.component"

const ProductsPage = () => <div>PRODUCT PAGE</div>

const AboutUs = () => <div>ABOUT US</div>

const Blog = () => <div>BLOG PAGE</div>

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route
                    index
                    element={
                        <>
                            <Header />
                            <Products />
                            <ProductQuality />
                            <Testimonials />
                            <Blogs />
                            <Footer />
                        </>
                    }
                />
                <Route path='shop' element={<Shop />}/>
                <Route path='auth' element={<Auth />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='about-us' element={<AboutUs />} />
                <Route path='blogs' element={<Blog />} />
                <Route path='profile' element={<Profile />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    )
}

export default Router
