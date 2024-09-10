import React from 'react'
import './hero'
import Hero from './hero'
import Popular from '../componetes/popular/popular'
import Offers from '../componetes/Offers/Offers'
import NewCollections from '../componetes/NewCollections/NewCollections'



const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
    </div>
  )
}

export default Shop
