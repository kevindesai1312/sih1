import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../componetes/Breadcrums/Breadcrums';
import ProductDisplay from '../componetes/ProductDisplay/ProductDisplay'





const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
       <Breadcrums product={product}/>
       <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
