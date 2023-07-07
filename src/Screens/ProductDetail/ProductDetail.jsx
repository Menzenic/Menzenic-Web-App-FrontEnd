import React, { useState, useEffect, useContext } from "react"
import clsx from "clsx"
import { Link, useParams } from "react-router-dom"
import { WishListIcon } from "../../utils/assets"
import ProductsData from "../../data/ProductsData";
import { ProductCard } from "../../components/Card"
import CustomerReview from "../../components/CustomerReview/CustomerReview"
import OurProduct from "../../components/OurProduct/OurProduct"
import Footer from "../../components/Footer/Footer"
import { CategoriesContext } from "../../contexts/categories.context"

const ProductDetail = () => {
    const { id } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const visibleProducts = ProductsData.slice(0, 3);
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const fetchProductDetails = () => {
            // Modify this part according to your data-fetching logic
            // For now, using dummy data from ProductsData array
            const selectedProduct = ProductsData.find(
                (product) => product.id.toString() === id
            );
            setProduct(selectedProduct);
        };

        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>
    }

    const handleQuantityChange = (value) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + value))
    }

    return (
        <section className="newpage-container">
            <div className="px-20 pt-24 pb-10 flex justify-between">
                <div className="w-[86px]">
                    {/* Three small images */}
                    <div className="flex flex-col items-center justify-center h-full gap-3">
                        <div className="w-32 h-32 bg-white flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-20 h-28"
                            />
                        </div>
                        <div className="w-32 h-32 bg-white flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-20 h-28"
                            />
                        </div>
                        <div className="w-32 h-32 bg-white flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-20 h-28"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-2/3 flex items-start ml-10">
                    {/* Main big image */}
                    <div className="relative bg-white w-[403px] h-[411px] flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-[218px] h-[336px] object-cover"
                        />
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                            <WishListIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    {/* Title, price, and quantity */}
                </div>
                <div className="text-white flex flex-col ml-8 items-start w-full">
                    <h3 className="text-6xl">{product.title}</h3>
                    <div className="flex items-center justify-center my-6">
                        <p className="text-lg text-white">★★★★★</p>
                        <p className="text-base ml-4 text-white">Reviews</p>
                    </div>
                    <p className="text-4xl">{product.price}</p>
                    <p className="text-sm my-2">Tax Included</p>
                    <div className="mt-auto">
                        <h4 className="text-sm mb-2">Quantity</h4>
                        <div className="flex items-center justify-center">
                            <div className="border rounded-md flex items-center justify-center px-2 py-1 w-[142px]">
                                <button
                                    className="p-1"
                                    onClick={() => handleQuantityChange(-1)}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="bg-transparent text-white px-2 w-10 text-center"
                                />
                                <button
                                    className="p-1"
                                    onClick={() => handleQuantityChange(1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className={clsx(
                                    "border rounded-md px-3 py-2 ml-4",
                                    "hover:bg-black hover:text-white",
                                    "transition-all duration-200 w-[406px]"
                                )}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <button
                        className={clsx(
                            "border bg-white text-black rounded-md px-6 py-2",
                            "hover:bg-black hover:text-white",
                            "transition-all duration-200 mt-4 w-[566px]"
                        )}
                    >
                        BUY NOW
                    </button>
                </div>
            </div>
            <OurProduct />
            <CustomerReview />
            <div className="product-suggestion-container p-6">
                <h2 className="label arial text-4xl mt-6 px-10 text-white">
                    You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                {visibleProducts.map((product) => (
                        <div className="p-2" key={product.id}>
                             <Link to={`/product-details/${product.id}`}>
                                <ProductCard
                                    product={product}
                                />
                             </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ProductDetail
