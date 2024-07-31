import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png';
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png';
import pinterest from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Conatact</li>
      </ul>
      <div className="social-footer-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="" />

        </div>
        <div className="footer-icon-container">
          <img src={pinterest} alt="" />
          
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="" />
          
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Copyright @ 2024 - All right reserved😍</p>
      </div>
    </div>
  )
}

export default Footer
