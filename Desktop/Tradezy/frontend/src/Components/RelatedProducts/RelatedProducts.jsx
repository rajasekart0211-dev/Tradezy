import './RelatedProducts.css'
import { useContext, useRef, useEffect } from "react"
import { ShopContext } from "../../Context/ShopContext.jsx"
import Item from '../Items/Items.jsx'

const RelatedProducts = (props) => {

  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current

    const onWheel = (e) => {
      e.preventDefault()         
      el.scrollLeft += e.deltaY  
    }

    el.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      el.removeEventListener("wheel", onWheel)
    }
  }, [])

  const { all_products } = useContext(ShopContext)
  return (
    <div className='relatedproducts'>
      <div className="title">
        <h1>Related prodcuts</h1>
        <hr />
      </div>
      <div className="products" ref={scrollRef}>
        {all_products.map((item) => {
          if (item.category === props.category && item.id != props.id) {
            return <Item key={item.id} id={item.id} name={item.name}
              image={item.image} new_price={item.new_price}
              old_price={item.old_price} />
          } else return null
        })}
      </div>
    </div>
  )
}

export default RelatedProducts