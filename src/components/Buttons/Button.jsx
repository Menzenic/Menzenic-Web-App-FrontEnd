const Button = (props) => {
    return (
        <div
            className="group hover:cursor-pointer mt-6 w-[9rem] h-[2.438rem] flex justify-between items-center px-3 rounded-sm"
            style={{
                background:
                    "linear-gradient(270.37deg,#f9f9f9 -29.27%, rgba(249, 249, 249, 0) 191.25%",
            }}
            id="button-2"
            onClick={props.onClick}
        >
            <div id="slide"></div>
            <p className="group-hover:font-semibold">{props.title}</p>
            <div className="shop-arrow right"></div>
        </div>
    )
}

export default Button