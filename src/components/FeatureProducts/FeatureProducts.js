import React, { useEffect, useState } from "react";
import { WishListIcon } from "../../utils/assets";
import ProductsData from "../../data/ProductsData";
import { Strings } from "../../utils/constants/Strings/Strings";
import { ProductCard } from "../Card";
import { LeftSliderArrow, RightSliderArrow } from "../../utils/assets/svg";
import clsx from "clsx";
// import { cloneDeep } from "lodash"

const Products = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // const [cards, setCards] = useState(3)

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? ProductsData.length - 3 : prevSlide - 3
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide >= ProductsData.length - 3 ? 0 : prevSlide + 3
        );
    };

    const visibleProducts = ProductsData.slice(currentSlide, currentSlide + 3);

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    // useEffect(() => {
    //     const windowWidth = windowSize.width

    //     if (windowWidth < 640) setCards(1)
    //     else if (windowWidth > 640 && windowWidth < 1100) setCards(2)
    //     else setCards(3)
    // }, [windowSize.width])

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="min-h-[638px]">
            <p className="text-5xl text-center mt-12">
                {Strings.PRODUCTS_TITLE}
            </p>
            <div className="flex w-full min-h-[500px] justify-between mt-10">
                <button className="mx-8" onClick={handlePreviousSlide}>
                    <LeftSliderArrow />
                </button>
                <div
                    className={clsx(
                        "flex flex-wrap items-center w-full",
                        windowSize.width < 790
                            ? "justify-center"
                            : "justify-between"
                    )}
                >
                    {visibleProducts.map((product) => (
                        <ProductCard
                            likeicon={<WishListIcon />}
                            image={product.image}
                            title={product.title}
                            rate={product.price}
                        />
                    ))}
                </div>
                <button className="mx-8" onClick={handleNextSlide}>
                    <RightSliderArrow />
                </button>
            </div>
        </section>
    );
};

export default Products;
