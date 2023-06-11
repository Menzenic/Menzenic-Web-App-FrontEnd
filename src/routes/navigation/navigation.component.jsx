import React, { useContext } from "react"
import { FiSearch } from "react-icons/fi"
import { Link, Outlet } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import SearchBar from "../../components/SearchBar/SearchBar"
import { UserLoginLogo, ShoppingCart } from "../../utils/assets"

import "./navigation.styles.css"
import { CartContext } from "../../contexts/cart.context"

const Navigation = () => {  
    const { currentUser } = useContext(UserContext)
    const { cartCount } = useContext(CartContext)

    // const [name, setName] = useState('')

    // useEffect(() => {
    //     (async function () {
    //         if(currentUser === null) return
    
    //         const res = await getUserDetails(currentUser)
    //         console.log("res: ", res)
    //     })()

    // }, [currentUser])

    return (
        <>
            <div className="bg-black text-white flex justify-between items-center px-5 py-2">
                <Link to="/">
                    <div className="h-[2.75rem] w-[15rem] mt-1 navbar-image"></div>
                </Link>

                <div className="flex w-[20.563rem] justify-between text-xl font-normal">
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <Link to='/products'>
                        <p>Products</p>
                    </Link>
                    <Link to='/about-us'>
                        <p>About us</p>
                    </Link>
                    <Link to='/blogs'>
                        <p>Blogs</p>
                    </Link>
                </div>

                <div className="mr-5 flex items-center">
                    <SearchBar icon={<FiSearch />} />
                    {currentUser?.displayName && <p className="ml-5 border p-3 hover:cursor-pointer">Hello {currentUser.displayName}</p>} 
                    <Link to={!currentUser ? "/auth" : '/profile'}>
                        <UserLoginLogo
                            onClick={() => {}}
                            className="mx-4"
                        />
                    </Link>
                    <Link to="/shop" className="cart-icon">
                        <ShoppingCart />
                        <span>{cartCount}</span>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation
