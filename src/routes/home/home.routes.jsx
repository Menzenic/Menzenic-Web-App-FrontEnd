import {
    Header,
    FeaturedProducts,
    ProductQuality,
    Testimonials,
    Blogs,
    Footer,
    HomeAboutUs,
    WhyIntimateHygiene,
    Hampers
} from "../../components"

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
    )
}

export default Home
