import React, { useContext } from "react"
import { FiSearch } from "react-icons/fi"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import clsx from "clsx"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import { SearchBar } from "../../components"

import {
    UserLoginLogo,
    ShoppingCart,
    WishListIcon,
    MenzenicFullLogo,
} from "../../utils/assets"

import "./navigation.styles.css"

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { cartCount } = useContext(CartContext)

    console.log("currentUser: ", currentUser)

    // const navigate = useNavigate()
    const location = useLocation()

    const pathName = location.pathname

    return (
        <>
            <div
                className={clsx(
                    "text-white flex justify-between items-center px-5 mt-7 absolute top-0 w-full z-[999]",
                    pathName === "/" ? "bg-transparent" : "bg-black"
                )}
            >
                <Link to="/">
                    <MenzenicFullLogo className="h-7 w-[215px]" />
                </Link>

                <div className="flex w-[32.813rem] justify-between text-xl font-medium -mt-2">
                    <Link
                        to="/"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Home</p>
                    </Link>
                    <Link
                        to="/products"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/products" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Products</p>
                    </Link>
                    <Link
                        to="/about-us"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/about-us" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>About us</p>
                    </Link>
                    <Link
                        to="/health-assesment"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/health-assesment" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Health Assesment</p>
                    </Link>
                    <Link
                        to="/blogs"
                        className={clsx(
                            "hover-underline-animation",
                            pathName === "/blogs" &&
                                "underline underline-offset-[5px] font-bold"
                        )}
                    >
                        <p>Blogs</p>
                    </Link>
                </div>

                <div className="mr-2 flex items-center">
                    <SearchBar icon={<FiSearch />} />
                    {/* {currentUser?.displayName && <p className="ml-5 border p-3 hover:cursor-pointer" onClick={() => navigate('/profile')}>Hello {currentUser.displayName}</p>}  */}
                    <Link to={!currentUser ? "/auth" : "/profile"}>
                        <div className="mx-4">
                            <UserLoginLogo onClick={() => {}} />
                        </div>
                    </Link>
                    <Link to="/shop" className="relative">
                        <ShoppingCart />
                        {/* <span className="absolute top-1 left-1 bg-gray-800">
                            {cartCount}
                        </span> */}
                    </Link>
                    <Link to="/wishlist" className="ml-4">
                        <WishListIcon className="h-7 w-7" />
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation
