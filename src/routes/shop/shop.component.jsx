import { useContext } from "react"

import { ProductsContext } from "../../contexts/products.context"
import { ProductCard } from "../../components/Card"

const Shop = () => {
    const { products } = useContext(ProductsContext)

    console.log(typeof products, products)

    return (
        <div className="flex flex-wrap items-center justify-between">
         {
            Object.keys(products).map((product, idx) => {
                return <ProductCard key={idx} product={product}/>
            })
         }
        </div>
    )
}

export default Shop