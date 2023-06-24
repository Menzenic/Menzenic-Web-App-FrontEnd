import { createContext, useEffect, useState } from "react";

import ProductsData from "../data/ProductsData";

import { addCollectionAndDocuments, createWishlist, getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    // setProducts: () => null,
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    const value = { categoriesMap }

    useEffect(() => {
        (async function(){
            // await addCollectionAndDocuments('categories', ProductsData)
            const categoryMap = await getCategoriesAndDocument()
            console.log("categoryMap:", categoryMap)
            setCategoriesMap(categoryMap)
        })()
    }, [])


    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}