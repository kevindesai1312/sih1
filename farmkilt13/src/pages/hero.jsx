import React from 'react'
import './hero.css'
import banners from '../componetes/assist/banner.jpg'
import hand_icon from '../componetes/assist/select.png'
import arrow_icon from '../componetes/assist/right-arrow.png'
import hero_image from '../componetes/assist/fresh.jpg'

const Hero = () => {
  return (
    <div className='hero'>
         <div className='hero-left'>
             <div>
              <div className='hero-hand-icon'>
                <p>fresh</p>
              </div>
                <p>vege/fruites/meat</p>
                <p>to the your doorstep</p>
             </div>
             <div className='hero-latest-btn'>
                learn more
                <img src={arrow_icon} alt=''></img>
             </div>
         </div>
         <div className='hero-right'>
              <img src={hero_image} alt=''></img>
         </div>
    </div>
  )
}

export default Hero
