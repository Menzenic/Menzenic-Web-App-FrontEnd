import React, { useContext } from "react"
import { FiSearch } from "react-icons/fi"
import { Link, Outlet, useLocation } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import SearchBar from "../../components/SearchBar/SearchBar"

import { UserLoginLogo, ShoppingCart, WishListIcon } from "../../utils/assets"
import "./navigation.styles.css"

const Navigation = () => {  
    const { currentUser } = useContext(UserContext)
    const { cartCount } = useContext(CartContext)

    // const location = useLocation()

    return (
        <>
            <div className="bg-black text-white flex justify-between items-center px-5 py-2">
                <Link to="/">
                    <div className="h-[3.75rem] w-[20rem] mt-2 navbar-image"></div>
                </Link>

                <div className="flex w-[40.563rem] justify-between text-2xl font-normal">
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <Link to='/products'>
                        <p>Products</p>
                    </Link>
                    <Link to='/about-us'>
                        <p>About us</p>
                    </Link>
                    <Link>
                        <p>Health Assesment</p>
                    </Link>
                    <Link to='/blogs'>
                        <p>Blogs</p>
                    </Link>
                </div>

                <div className="mr-2 flex items-center">
                    <SearchBar icon={<FiSearch />} />
                    {currentUser?.displayName && <p className="ml-5 border p-3 hover:cursor-pointer">Hello {currentUser.displayName}</p>} 
                    <Link to={!currentUser ? "/auth" : '/profile'}>
                        <UserLoginLogo
                            onClick={() => {}}
                            className="mx-4"
                        />
                    </Link>
                    <Link to="/shop" className="relative">
                        <ShoppingCart />
                        <span className="absolute top-1 left-1 bg-gray-800">{cartCount}</span>
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
