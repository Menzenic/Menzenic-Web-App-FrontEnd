import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    Header,
    FeaturedProducts,
    ProductQuality,
    Testimonials,
    Blogs,
    Footer,
    HomeAboutUs,
    WhyIntimateHygiene,
    Hampers,
} from "../../components";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";

const Home = () => {
    return (
        <>
            <Header />
            <HomeAboutUs />
            <WhyIntimateHygiene />
            <FeaturedProducts />
            <ProductQuality />
            <Hampers />
            <Testimonials />
            <Blogs />
            <Footer />
        </>
    );
};

export default Home;
