import './items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div onClick={()=> window.scrollTo(0,0)} className='item'>
        <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="" />
        </Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-prices-new">
                ${props.new_price}
            </div>
            <div className="item-prices-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items