import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectProducts } from "../../store/categories/categories.selector";
import { ProductCard } from "../../components/Card";
import Footer from "../../components/Footer/Footer";

import { FilterIcon } from "../../utils/assets";

const Products = () => {
    const categoriesMap = useSelector(selectProducts)

    const Products = Object.keys(categoriesMap)
        .map((categoryMap) => categoriesMap[categoryMap])
        .flat();

    return (
        <div className="newpage-container">
            <div className="py-4 w-full">
                <div className="flex items-center justify-between mt-20 w-full px-14">
                    <h1 className="label-arial text-left text-4xl text-white">
                        All Products
                    </h1>
                    <div className="flex items-center justify-between text-xl text-white">
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
                <div className="w-full px-14">
                    <div
                        className={clsx(
                            "py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full",
                            "gap-[3.56rem] md:gap-x-[10rem] lg:gap-x-[20rem] xl:gap-x-[6rem] 2xl:gap-x-[13rem]",
                        )}
                    >
                        {Products.map((product, idx) => (
                            <ProductCard
                                product={product}
                                key={product.id}
                                variant={'product'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
