import React, { useState } from "react";
import { FilterIcon } from "../../utils/assets";
import { ProductCard } from "../../components/Card";
import ProductsData from "../../data/ProductsData";
import "../../utils/styles/styles.css";
import Footer from "../../components/Footer/Footer";

const Products = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const visibleProducts = ProductsData.slice(0, 10);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div className="products newpage-container">
            <div className="products-container pl-10 py-4 ml-6">
                <div className="flex items-center justify-between mt-20 pr-20">
                    <h1 className="label-arial text-left text-4xl text-white">
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
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                    {visibleProducts.map((product) => (
                        <a
                            key={product.id}
                            href={`/product/${product.name}`} // Assuming the product name is part of the URL
                        >
                            <ProductCard
                                likeicon={product.likeicon}
                                image={product.image}
                                title={product.title}
                                rate={product.price}
                            />
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
