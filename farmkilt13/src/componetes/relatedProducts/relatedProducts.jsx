import React from 'react'
import './relatedproducts.css'
import data_product from '../Assets/data'
import Item from '../items/item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
    <h1> Telated vege </h1>
      <hr/>
    <div classNmae="relatedproducts-iteam">
    {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts

