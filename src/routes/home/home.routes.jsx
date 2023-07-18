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
import WhyIntimateCare from "../../components/WhyIntimateCare/WhyIntimateCare";
import MenzenicSignature from "../../components/MenzenicSignature/MenzenicSignature";
import HampersAndCombo from "../../components/HampersAndCombo/HampersAndCombo";

const Home = () => {
    return (
        <>
            <Header />
            <HomeAboutUs />
            <WhyIntimateHygiene />
            <FeaturedProducts />
            <ProductQuality />
            <WhyIntimateCare />
            {/* <Hampers /> */}
            <HampersAndCombo />
            <Testimonials />
            <Blogs />
            <MenzenicSignature />
            <Footer />
        </>
    );
};

export default Home;
