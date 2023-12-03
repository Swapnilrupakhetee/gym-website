import React from 'react'
import '../components/Price.css'
import { CgGym } from "react-icons/cg";
import { AiFillDollarCircle } from "react-icons/ai";

function Price() {
  return (
    <div className='price'>
    <h1 className='pricing-title'>OUR PRICING <CgGym /></h1>
    <div className='price-container'>
        
        <div className='price-options'>
            <h2 className='price-tier'>Bronze</h2>
            <div className='pricing-container'><AiFillDollarCircle className='dollar'/><p>30</p></div>

        </div>
        <div className='price-options'>
            <h2 className='price-tier'>Silver</h2>
            <div className='pricing-container'><AiFillDollarCircle className='dollar'/><p>50</p></div>
            
        </div>
        <div className='price-options'>
            <h2 className='price-tier'>Gold</h2>
            <div className='pricing-container'><AiFillDollarCircle className='dollar'/><p>100</p></div>
        
        </div>
    </div>
    </div>
  )
}

export default Price