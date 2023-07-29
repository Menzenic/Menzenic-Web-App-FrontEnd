import clsx from "clsx"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import { selectCategoriesMap } from "../../store/categories/categories.selector"

import { LeftSliderArrow, RightSliderArrow, WishListedIcon } from "../../utils/assets"

const Hampers = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const [slidesVisible, setSlidesVisible] = useState(4)
    const [isSmall, setIsSmall] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1440 || window.innerHeight < 940) {
                setIsSmall(true)
            } else {
                setIsSmall(false)
            }
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        if (isSmall) {
            setSlidesVisible(3)
        } else {
            setSlidesVisible(4)
        }
        return () => window.removeEventListener("resize", handleResize)
    }, [isSmall])

    const FeaturedProducts = Object.keys(categoriesMap)
        .filter((categoryMap) => categoryMap === "hampers")
        .map((categoryMap) => categoriesMap[categoryMap])
        .flat()

    return (
        <div className="w-full">
            <div className="section-background-image w-full min-h-[400px] items-center">
                <p className="text-[44px] font-semibold pt-12 pb-10 text-center w-full text-white">
                    Hampers
                </p>
                <div>
                    <CarouselProvider
                        className="relative"
                        naturalSlideHeight={50}
                        naturalSlideWidth={50}
                        visibleSlides={slidesVisible}
                        totalSlides={4}
                        infinite
                    >
                        <Slider className="min-h-[500px] w-full pr-10 pl-12">
                            {FeaturedProducts.map((prod, idx) => (
                                <Slide index={idx}>
                                    <div className="flex flex-col bg-white rounded-xl shadow-xl w-[21.77rem] min-h-[22.063rem] items-center relative m-5">
                                        <div
                                            className={clsx(
                                                "absolute top-5 right-5",
                                                "hover:cursor-pointer"
                                            )}
                                            // onClick={() =>
                                            //     addToWishListHelper()
                                            // }
                                        >
                                                <WishListedIcon />
                                        </div>
                                        {prod.image ? (
                                            <img
                                                className="w-full h-[12.25rem] rounded-t-xl"
                                                src={prod.image}
                                                alt={prod.title}
                                            />
                                        ) : (
                                            <div>IMAGE</div>
                                        )}
                                        {prod.title ? (
                                            <p className="text-xl mt-4">
                                                {prod.title}
                                            </p>
                                        ) : (
                                            <p>HEADING</p>
                                        )}
                                        {prod.rate ? (
                                            <p className="text-xl mt-2">
                                                {prod.rate}
                                            </p>
                                        ) : (
                                            <p>200</p>
                                        )}
                                        <div className="flex w-full justify-between px-5 mt-4">
                                            <button
                                                className={clsx(
                                                    "border border-[#A4A4A4] rounded-md px-6 py-2",
                                                    "hover:bg-black hover:text-white",
                                                    "transition-all duration-200"
                                                )}
                                                // onClick={addItemToCartHandler}
                                            >
                                                Add to cart
                                            </button>
                                            <button
                                                className={clsx(
                                                    "border rounded-md px-8 py-2",
                                                    "bg-[#0D0A0A] text-white",
                                                    "transition-all duration-200"
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
    )
}

export default Hampers
