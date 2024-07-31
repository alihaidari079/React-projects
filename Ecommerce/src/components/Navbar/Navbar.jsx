import React from 'react'
import {useState} from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const handleClick = function(MenuName) {
    setMenu(MenuName);
  }
   return (
    <div className='Navbar'>
    <div className="nav-logo">
    <img src={logo}  className="logo" alt="logo" />
    <p>SHOPPER</p>
    </div>
    <ul className='navbar-menu'>
      <li onClick={() => {setMenu('shop')}}> <Link to='/' style={{textDecoration: 'none'}}>Shop</Link> {menu ==='shop'? <hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Men")}}> <Link to='/mens' style={{textDecoration: 'none'}}>men</Link> {menu === "Men" ? <hr/>:<></>}</li>
      <li onClick={() => {handleClick('women')}}> <Link to='/womens' style={{textDecoration: 'none'}}>women</Link>  {menu ==='women'? <hr/>:<></>}</li>
      <li onClick={() => {handleClick('kids')}}> <Link to='/kids' style={{textDecoration: 'none'}}>kids </Link> {menu==='kids'?<hr/>:<></>}</li>
    </ul>
      <div className="login-btn">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="count">0</div>
      </div>
      
    </div>
  )
}

export default Navbar
