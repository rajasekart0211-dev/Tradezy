import './Popular.css'
import Data from '../../assets/data.js'
import Item from '../../Components/Items/Items.jsx'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr />
        <div className="popular-item">
            {Data.map((item, index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular