import React from 'react'
import './Productdisplay.css'
import star_icon from '../assist/star_icon.png'
import star_dull_icon from '../assist/star_dull_icon.png'

const ProductDisplay = (props) => {

  const {product} = props;

  return (
    <div className='productdispaly'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A fresh product directly to farm. which incress your health.
        </div>
        <div className='productdisplay-right-size'>
            <h1>Select qun.</h1>
            <div className='productdisplay-right-size'>
                  <div> 1 KG.</div>
                  <div> 2 KG.</div>
                  <div> 5 KG.</div>
                  <div> 10 KG.</div>
            </div>
        </div>
        <button> ADD TO CART</button>
        <p className='productdisplay-right-category'> <span> Category: </span>vege,fruties,meat</p>
        <p className='productdisplay-right-category'> <span> tags: </span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
