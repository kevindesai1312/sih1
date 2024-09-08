import React, { useState } from 'react'
import './navbar.css'
import logo from '../assist/logo1.jpg'
import cart_icon from '../assist/shopping-cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setmenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
         <img src={logo} alt=''></img>
         <p>FARMKilt</p>
        </div> 
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu('Shop')}}><Link style={{textDecoration:'none'}} to='/'>shop</Link>{menu=="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('vegetables')}}><Link style={{textDecoration:'none'}} to='/vegetables'>vegetable</Link>{menu=="vegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('fruites')}}><Link style={{textDecoration:'none'}} to='/fruites'>fruites</Link>{menu=="fruites"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu('meat-fish')}}><Link style={{textDecoration:'none'}} to='meat-fish'>meat/fish</Link>{menu=="meat-fish"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button> login </button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''></img></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar
