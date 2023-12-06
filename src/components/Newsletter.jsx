import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter-container'>
        <div className='newsletter-left'>
        <p>Want product news and updates? Sign up for our newsletter</p>
        </div>
        <div className='newsletter-right'>
            <input type='text' className='newsletter-container'/>
            <div className='subscribe-btn'>Subscribe</div>
           
        </div>
    </div>
  )
}

export default Newsletter