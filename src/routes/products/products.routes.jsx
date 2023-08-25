import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/categories/categories.selector";
import { ProductCard } from "../../components/Card";
import Footer from "../../components/Footer/Footer";
import {
	FilterIcon,
	HairRemovalSprayBgRemPng,
	OpenBoxImage,
	OpenBoxImage2,
	TemplateProductMockupBgRem,
} from "../../utils/assets";

const Products = () => {
	const categoriesMap = useSelector(selectProducts);

	const Products = Object.keys(categoriesMap)
		.map((categoryMap) => categoriesMap[categoryMap])
		.flat();

	return (
		<div className="newpage-container">
			<div className="min-h-[700px] flex justify-between items-center">
				<div className="pl-20 text-sm lg:text-2xl text-white h-[300px] flex flex-col justify-between">
					<p className="text-4xl font-bold">Claims</p>
					<p>
						&#x2022; The best product in the hair removal space - if
						you don’t believe us, try it out for yourself.
					</p>
					<p>&#x2022; Saves you time, removes hair in just 5 mins.</p>
					<p>
						&#x2022; No side effects, applicable on all skin types.
					</p>
					<p>[One Product, honed to perfection]</p>
				</div>
				<div className="">
					<img
						src={HairRemovalSprayBgRemPng}
						alt="Hair Removal Spray"
					/>
				</div>
			</div>
			{/* <div className="py-4 w-full">
                <div className="flex items-center justify-between mt-20 w-full px-6 sm:px-14">
                    <h1 className="label-arial text-left text-xl sm:text-4xl text-white">
                        All Products
                    </h1>
                    <div className="flex items-center justify-between text-base sm:text-xl text-white">
                        <FilterIcon />
                        <button
                            className={`ml-2 font-bold underline underline-offset-8`}
                        >
                            In Stock
                        </button>
                        <button className={`ml-2 text-gray-500`}>
                            Out of Stock
                        </button>
                    </div>
                </div>
                <div className="w-full px-4 sm:px-14">
                    <div
                        className={clsx(
                            "py-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full",
                            "gap-[3.56rem] md:gap-x-[10rem] lg:gap-x-[20rem] xl:gap-x-[6rem] 2xl:gap-x-[13rem]"
                        )}
                    >
                        <div className="min-h-[22.0625rem] min-w-[21.76969rem] relative">
                            <img
                                src={OpenBoxImage2}
                                className="absolute h-[22.0625rem] w-[21.76969rem]"
                                alt="box"
                            />
                            <img
                                className="h-[10.25rem] w-[10.625rem] shadow-2xl shadow-black absolute top-[48%] left-[47.5%] -translate-y-1/2 -translate-x-1/2"
                                src={TemplateProductMockupBgRem}
                                alt="template pic"
                            />
                            <p className="border border-black py-5 text-white w-[80%] text-center text-2xl font-bold z-50 absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                INTIMATE BODY WASH
                            </p>
                        </div>
                        {Products.map((product, idx) => (
                            <ProductCard
                                product={product}
                                key={product.id}
                                variant={"product"}
                            />
                        ))}
                    </div>
                </div>
            </div> */}
			<Footer />
		</div>
	);
};

export default Products;
