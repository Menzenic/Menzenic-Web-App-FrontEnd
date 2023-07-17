import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
    selectFeaturedProducts,
    selectHampers,
} from "../../store/categories/categories.selector";
import { ProductCard } from "../Card";
import { Strings } from "../../utils/constants/Strings/Strings";

import {
    LeftSliderArrow,
    RightSliderArrow,
    WishListedIcon,
} from "../../utils/assets/svg";

const FeaturedProducts = () => {
    const featuredProductsFromStore = useSelector(selectFeaturedProducts)
    const hampersFromStore = useSelector(selectHampers)

    const [featuredProducts, setFeaturedProducts] = useState(featuredProductsFromStore)
    const [hampers, setHampers] = useState(hampersFromStore)

    const [slidesVisible, setSlidesVisible] = useState(4);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        setFeaturedProducts(featuredProductsFromStore)
        setHampers(hampersFromStore)
    }, [featuredProductsFromStore, hampersFromStore]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < 740) {
                setIsSmall(true);
            } else {
                setIsSmall(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        if (isSmall) {
            setSlidesVisible(3);
        } else {
            setSlidesVisible(4);
        }
        return () => window.removeEventListener("resize", handleResize);
    }, [isSmall]);

    return (
        <section className="min-h-[500px]">
            <p className="text-[44px] font-semibold text-center mt-12">
                {Strings.PRODUCTS_TITLE}
            </p>
            <div className="w-full">
                <CarouselProvider
                    className="relative"
                    naturalSlideHeight={50}
                    naturalSlideWidth={50}
                    visibleSlides={slidesVisible}
                    totalSlides={4}
                    infinite
                >
                    <Slider className="min-h-[450px] w-full pr-10 pl-20 pt-10">
                        {featuredProducts?.length > 0 && Object.keys(featuredProducts).map((prod, idx) => {
                            return (
                            <Slide index={idx}>
                                <ProductCard
                                    key={idx}
                                    product={featuredProducts[prod]}
                                    variant={'featured'}
                                />
                            </Slide>
                        )})}
                    </Slider>
                    <ButtonBack className="absolute top-[9rem] left-5">
                        <LeftSliderArrow />
                    </ButtonBack>
                    <ButtonNext className="absolute top-[9rem] right-5">
                        <RightSliderArrow />
                    </ButtonNext>
                </CarouselProvider>
            </div>

            {/* Hampers section */}
            <div className="w-full px-20 mb-28">
                <div className="newpage-container section-background-image w-full min-h-[400px] items-center rounded-3xl">
                    <p className="text-[44px] font-semibold pt-12 pb-10 text-center w-full text-white">
                        Hampers
                    </p>
                    <div>
                        <CarouselProvider
                            className="relative"
                            naturalSlideHeight={50}
                            naturalSlideWidth={50}
                            visibleSlides={2}
                            totalSlides={4}
                            infinite
                        >
                            <Slider className="h-[500px] w-full pr-10 pl-12">
                                {hampers?.length > 0 && Object.keys(hampers).map((prod, idx) => (
                                    <Slide index={idx}>
                                        <div className="flex flex-col bg-white rounded-xl shadow-xl w-[21.77rem] min-h-[22.063rem] items-center relative m-5">
                                            <div
                                                className={clsx(
                                                    "absolute top-5 right-5",
                                                    "hover:cursor-pointer",
                                                )}
                                                // onClick={() =>
                                                //     addToWishListHelper()
                                                // }
                                            >
                                                <WishListedIcon />
                                            </div>
                                            {hampers[prod].image ? (
                                                <img
                                                    className="w-full h-[12.25rem] rounded-t-xl"
                                                    src={hampers[prod].image}
                                                    alt={hampers[prod].title}
                                                />
                                            ) : (
                                                <div>IMAGE</div>
                                            )}
                                            {hampers[prod].title ? (
                                                <p className="text-xl mt-4">
                                                    {prod.title}
                                                </p>
                                            ) : (
                                                <p>HEADING</p>
                                            )}
                                            {hampers[prod].rate ? (
                                                <p className="text-xl mt-2">
                                                    {hampers[prod].rate}
                                                </p>
                                            ) : (
                                                <p>200</p>
                                            )}
                                            <div className="flex w-full justify-between px-5 mt-4">
                                                <button
                                                    className={clsx(
                                                        "border border-[#A4A4A4] rounded-md px-6 py-2",
                                                        "hover:bg-black hover:text-white",
                                                        "transition-all duration-200",
                                                    )}
                                                    // onClick={addItemToCartHandler}
                                                >
                                                    Add to cart
                                                </button>
                                                <button
                                                    className={clsx(
                                                        "border rounded-md px-8 py-2",
                                                        "bg-[#0D0A0A] text-white",
                                                        "transition-all duration-200",
                                                    )}
                                                    // onClick={addItemToCartHandler}
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    </Slide>
                                ))}
                            </Slider>
                            <ButtonBack className="absolute top-[9rem] left-5">
                                <LeftSliderArrow />
                            </ButtonBack>
                            <ButtonNext className="absolute top-[9rem] right-5">
                                <RightSliderArrow />
                            </ButtonNext>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
