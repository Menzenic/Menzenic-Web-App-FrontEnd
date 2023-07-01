import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../components/Card";
import Footer from "../../components/Footer/Footer";

const Products = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <section className="products">
            <div className="h-full w-full flex flex-wrap">
                {Object.keys(categoriesMap).map((title) => {
                    if (title === "products") {
                        return (
                            <div className="h-full w-full flex flex-wrap">
                                <h1>All Products</h1>
                                <div className="flex flex-wrap">
                                    {categoriesMap[title].map((product) => {
                                        console.log("product:", product);
                                        return (
                                            <ProductCard product={product} />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    } else {
                        return <div></div>;
                    }
                })}
            </div>
            <Footer />
        </section>
    );
};

export default Products;
