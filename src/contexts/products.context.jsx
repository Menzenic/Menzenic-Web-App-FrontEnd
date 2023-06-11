import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";
import ProductsData from "../components/ProductsData";

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null,
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const value = { products }

    useEffect(() => {
        (async function(){
            const categoriesMap = await getCategoriesAndDocument()
            setProducts(categoriesMap)
        })()
    }, [])

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}