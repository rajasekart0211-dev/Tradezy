import './ProductDisplay.css'
import star from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import Relatedproducts from '../RelatedProducts/RelatedProducts'

const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div>
            <div className='ProductDisplay'>
                <div className="product-dislay-left">
                    <div className="product-display-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-display-img">
                        <img className='product-img-main-img' src={product.image} alt="" />
                    </div>
                </div>
                <div className="product-display-right">
                    <h1>{product.name}</h1>
                    <div className="product-display-right-stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star_dull} alt="" />
                        <p>122</p>
                    </div>
                    <div className="product-display-right-price">
                        <div className="product-display-old-price">
                            ${product.old_price}
                        </div>
                        <div className="product-display-new-price">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="product-display-right-description">
                        description
                    </div>
                    <div className="product-display-right-size">
                        <h1>Select size</h1>
                        <div className="product-display-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>Add to Cart</button>
                    <p className="product-display-right-category">
                        <span>Category: {product.category}, T-Shirt, Crop top</span>
                        <span>Tags: {product.category}, Modern outfits</span>
                    </p>
                </div>
            </div>
            <Relatedproducts category={product.category} id = {product.id}/>
        </div>
    )
}

export default ProductDisplay