import clsx from "clsx";

const ProductCard = (props) => {
    return (
        <div
            className={clsx(
                "flex flex-col bg-white shadow-xl w-[18.77rem] h-[22.0625rem] items-center relative my-10",
                props.productClassName
            )}
        >
            {props.likeicon ? (
                <div
                    className={clsx(
                        "absolute top-2 right-2",
                        "hover:cursor-pointer",
                        props.iconClassName
                    )}
                >
                    {props.likeicon}
                </div>
            ) : (
                ""
            )}
            {props.image ? (
                <img
                    className={clsx(
                        "w-[6.625rem] h-[10.25rem]",
                        props.imageClassName
                    )}
                    src={props.image}
                    alt={props.title}
                />
            ) : (
                <div>IMAGE</div>
            )}
            {props.title ? (
                <p className={clsx("text-2xl mt-4", props.titleClassName)}>
                    {props.title}
                </p>
            ) : (
                <p>HEADING</p>
            )}
            {props.rate ? (
                <p className="text-xl mt-2">{props.rate}</p>
            ) : (
                <p>200</p>
            )}

            <div className="flex mt-4 gap-4">
                <button
                    className={clsx(
                        "border rounded-md px-3 py-2",
                        "hover:bg-black hover:text-white",
                        "transition-all duration-200",
                        props.buttonClassName
                    )}
                >
                    ADD TO CART
                </button>
                <button
                    className={clsx(
                        "border bg-black text-white rounded-md px-6 py-2",
                        "hover:bg-white hover:text-black",
                        "transition-all duration-200",
                        props.buttonClassName
                    )}
                >
                    BUY NOW
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
