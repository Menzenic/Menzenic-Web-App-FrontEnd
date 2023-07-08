import { useContext, useState } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import { ProductCard } from "../../components/Card"
import { FilterIcon } from "../../utils/assets"
import Footer from "../../components/Footer/Footer"

const Products = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    const Products = Object.keys(categoriesMap)
        .filter((categoryMap) => categoryMap === "products")
        .map((categoryMap) => categoriesMap[categoryMap])
        .flat()

    return (
        <div className="newpage-container">
            <div className="py-4 w-full">
                <div className="flex items-center justify-between mt-20 w-full px-14">
                    <h1 className="label-arial text-left text-4xl text-white">
                        All Products
                    </h1>
                    <div className="flex items-center justify-between">
                        <FilterIcon />
                        <button
                            className={`ml-2 label-arial text-white`}
                        >
                            In Stock
                        </button>
                        <button
                            className={`ml-2 label-arial text-white`}
                        >
                            Out of Stock
                        </button>
                    </div>
                </div>
                <div className="w-full px-14">
                    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 w-full">
                        {Products.map((product, idx) => (
                                <ProductCard product={product} 
                                    card={{
                                        height: '22.0625rem',
                                        minWidth: '21.76969rem',
                                    }}
                                    imageSize={{
                                        height: '10.25rem',
                                        width: '6.625rem',
                                    }}
                                    priceFontSize="1.375rem"
                                    titleFontSize="1.625rem"
                                    wishListIcon={{
                                        height: '2rem',
                                        width: '2rem',
                                    }}
                                    key={idx}
                                />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products
