import React from 'react'
import './Css/LoginSignup.css'
const LoginSignup = () => {
  return  (
  <div className='loginsignup'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>continue</button>
        <p className='login-login'>Already have an account? <span>login here</span></p>
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, non?</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
