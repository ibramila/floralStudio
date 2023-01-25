import React from 'react'
import "./style.scss"
function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className='footer'>
          <li style={{width:"40%"}}>
            <img style={{
              width:"20%", 
            }} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
            <div className='email'>
            <input type="text" placeholder='Your Email' />
            <button>Send</button>
            </div>
          </li>
          <li>
            <h5>About</h5>
            <span>About Us</span>
            <span>Our Partners</span>
            <span>Our Services</span>
          </li>
          <li>
            <h5>Contact</h5>
            <span>Contact Us</span>
            <span>FAQ Page</span>
            <span>About Me</span>
          </li>
          <li>
            <h5>Follow Us</h5>
          </li>
        </ul>
      </div>
    </footer >
  )
}

export default Footer