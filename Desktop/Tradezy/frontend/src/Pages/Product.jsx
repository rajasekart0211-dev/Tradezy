import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext.jsx"
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx"

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {id} = useParams()
  const product_id = Number(id)
  const product = all_products.find((product)=>{return product.id === product_id} )
  console.log(product)
  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product