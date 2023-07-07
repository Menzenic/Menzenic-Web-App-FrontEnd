import { useContext, useState } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import { ProductCard } from "../../components/Card"
import { FilterIcon } from "../../utils/assets"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"

const Products = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const [selectedFilter, setSelectedFilter] = useState(null)
    // const visibleProducts = ProductsData.slice(0, 10);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter)
    }

    return (
        <div className="newpage-container">
            <div className="py-4 w-full">
                <div className="flex items-center justify-between mt-20 pr-20">
                    <h1 className="label-arial text-left text-4xl text-white pl-24">
                        All Products
                    </h1>
                    <div className="flex items-center justify-between pr-10">
                        <FilterIcon />
                        <span className="ml-1 label-arial mr-2 text-white">
                            Filter
                        </span>
                        <button
                            className={`ml-2 label-arial text-white ${
                                selectedFilter === "inStock"
                                    ? "text-gray-400"
                                    : ""
                            }`}
                            onClick={() => handleFilterClick("inStock")}
                        >
                            In Stock
                        </button>
                        <button
                            className={`ml-2 label-arial text-white ${
                                selectedFilter === "outOfStock"
                                    ? "text-gray-400"
                                    : ""
                            }`}
                            onClick={() => handleFilterClick("outOfStock")}
                        >
                            Out of Stock
                        </button>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center"> 
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-14 gap-x-14">
                        {Object.keys(categoriesMap).map((title) => {
                            if (title === "products") {
                                return (
                                    // <div className="h-full w-full flex flex-wrap">
                                        <>
                                            {categoriesMap[title].map((product) => {
                                                console.log("product:", product)
                                                return (
                                                    <Link to={`/product-details/${product.id}`}>
                                                        <ProductCard
                                                            product={product}
                                                        />
                                                    </Link>
                                                )
                                            })}
                                        </>
                                    // </div>
                                )
                            } else {
                                return <></>
                            }
                        })}
                        {/* {visibleProducts.map((product) => (
                            <Link
                                key={product.id}
                                to={`/productdetail/${product.id}`}
                                className="hover:cursor-default"
                                // href={`/product/${product.name}`} // Assuming the product name is part of the URL
                            >
                                <ProductCard
                                    likeicon={<WishListIcon />}
                                    image={product.image}
                                    title={product.title}
                                    rate={product.price}
                                />
                            </Link>
                        ))} */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products
