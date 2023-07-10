import React from "react"
import { useNavigate } from "react-router-dom"

import Button from "../Buttons/Button"

import "./Header.css"

const Header = () => {
    const navigate = useNavigate()

    // const handleShopNowClick = () => {
    //     navigate("/products")
    // }

    return (
        <div className="min-h-[638px] relative">
            <div className="h-[682px] header-image"></div>
            <div className="absolute top-[17.688rem] left-[3.188rem]">
                <div className="text-5xl text-white text-left font-['Arial'] leading-[55px] font-normal">
                    <p>When it comes to your body,</p>
                    <p className="mt-3"> cleanliness is key</p>
                </div>
                <Button title={'Shop Now'} onClick={() => navigate('/products')} />
            </div>
        </div>
    )
}

export default Header
