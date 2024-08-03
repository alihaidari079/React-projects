import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Ofers On Your Email</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque.</p>
      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
