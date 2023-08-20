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
	WhyIntimateCare,
	MenzenicSignature,
	HampersAndCombos,
} from "../../components";

const Home = () => {
	return (
		<>
			<Header />
			{/* <HomeAboutUs /> */}
			{/* <WhyIntimateHygiene /> */}
			{/* <FeaturedProducts /> */}
			<WhyIntimateCare />
			<ProductQuality />
			{/* <Hampers /> */}
			{/* <HampersAndCombos /> */}
			<Testimonials />
			<Blogs />
			<MenzenicSignature />
			<Footer />
		</>
	);
};

export default Home;
