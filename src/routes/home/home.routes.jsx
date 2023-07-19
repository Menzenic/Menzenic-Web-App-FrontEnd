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
import HampersAndCombos from "../../components/HampersAndCombos/HampersAndCombos";

const Home = () => {
    return (
        <>
            <Header />
            {/* <HomeAboutUs /> */}
            {/* <WhyIntimateHygiene /> */}
            <FeaturedProducts />
            <ProductQuality />
            <WhyIntimateCare />
            {/* <Hampers /> */}
            <HampersAndCombos />
            <Testimonials />
            <Blogs />
            <MenzenicSignature />
            <Footer />
        </>
    );
};

export default Home;
