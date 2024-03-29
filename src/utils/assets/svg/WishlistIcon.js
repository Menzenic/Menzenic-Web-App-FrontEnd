const WishListIcon = (props) => {
    return (
        <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20.25 0C17.669 0 15.409 1.11 14 2.986 12.591 1.11 10.331 0 7.75 0A7.759 7.759 0 0 0 0 7.75c0 8.75 12.974 15.832 13.526 16.125a1 1 0 0 0 .948 0C15.026 23.582 28 16.5 28 7.75A7.759 7.759 0 0 0 20.25 0ZM14 21.85c-2.283-1.33-12-7.389-12-14.1A5.757 5.757 0 0 1 7.75 2c2.431 0 4.473 1.295 5.325 3.375a1 1 0 0 0 1.85 0C15.777 3.291 17.819 2 20.25 2A5.757 5.757 0 0 1 26 7.75c0 6.701-9.72 12.769-12 14.1Z"
                fill="url(#a)"
            />
            <defs>
                <linearGradient
                    id="a"
                    x1="14"
                    y1="0"
                    x2="14"
                    y2="46"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#fff" />
                    <stop offset=".505" stop-color="#fff" stop-opacity=".495" />
                    <stop offset="1" stop-color="#ABABAB" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default WishListIcon
