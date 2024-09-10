import React, { useContext } from 'react'
import './css/Shopcategory.css'
import { ShopContext } from '../contex/ShopContext'
import dropdown_icon from '../componetes/assist/dropdown_icon.png'
import Item from '../componetes/items/item'

const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <div className='shopcategory-indexsort'>
           <p>
            <span>Showing 1-12</span> out of 36 Products
           </p>
           <div className='shopcategory-sort'>
                Sort by <img src={dropdown_icon} alt="" />
           </div>
        </div>
        <div className='shopcategory-products'>
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else{
                  return null;
                }
            })}
        </div>
        <div className='shopcategory-loadmore'>
           Explore More
        </div>
    </div>
  )
}

export default Shopcategory
