import React from 'react'
import './Footer.css'
import footer_logo from '../src/componetes/assist/logo1.jpg'
import instgram_icons from '../src/componetes/assist/instagram.png'
import pintester_icon from '../src/componetes/assist/pintester_icon.png'
import whatsapp_icon from '../src/componetes/assist/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>FARMKILT</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <a href=''><img src={instgram_icons} alt="" /></a>
            </div>
            <div className='footer-icons-container'>
                <img src={pintester_icon} alt="" />
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2023 - All right Reserved</p>
            </div>
        </div> 
    </div>
  )
}
export default Footer
