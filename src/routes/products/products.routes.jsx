import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"
import { ProductCard } from "../../components/Card"

const Products = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <div className="h-full w-full flex flex-wrap">
            {Object.keys(categoriesMap).map((title) => {
                if(title === 'products'){
                    return (
                        <div className="h-full w-full flex flex-wrap">
                            <h1>{title}</h1>
                            <div className="flex flex-wrap">
                                {categoriesMap[title].map((product) => {
                                    console.log('product:', product)
                                    return (
                                        <ProductCard product={product}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }else{
                    return <div></div>
                }
            })}
        </div>
    )
}

export default Products