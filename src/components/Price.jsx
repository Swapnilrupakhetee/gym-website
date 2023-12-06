import React from 'react'
import '../components/Price.css'
import { CgGym } from "react-icons/cg";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";

function Price() {
  return (
    <div className='price'>
    <h1 className='pricing-title'>OUR PRICING <CgGym /></h1>
    <div className='price-container'>
        
        <div className='price-options'>
            <h2 className='price-tier'>Bronze</h2>
            <div className='pricing-container'><AiFillDollarCircle className='dollar'/><p>30</p></div>
            <h5>per month</h5>
            <div className='stuff'><CiCircleCheck />free food</div>
            <div className='stuff'><CiCircleCheck />High intensity</div>
            <div className='stuff'><CiCircleCheck />Swimming pool</div>
            <div className='stuffs'><CiCircleCheck />Unlimited sauna</div>
            <div className='stuffs'><CiCircleCheck />free WiFi</div>
            <div className='buy-btn'>
              BUY NOW
            </div>

        </div>
        <div className='price-options'>
            <h2 className='price-tier'>Silver</h2>
            <div className='pricing-container'><AiFillDollarCircle className='dollar'/><p>50</p></div>
            <h5>per month</h5>
            <div className='stuff'><CiCircleCheck />free food</div>
            <div className='stuff'><CiCircleCheck />High intensity</div>
            <div className='stuff'><CiCircleCheck />Swimming pool</div>
            <div className='stuffs'><CiCircleCheck />Unlimited sauna</div>
            <div className='stuffs'><CiCircleCheck />free WiFi</div>
            <div className='btn-container'>
              
            </div>
            <div className='buy-btn'>
              BUY NOW
            </div>
            
        </div>
        <div className='price-options'>
            <h2 className='price-tier'>Golden</h2>
            <div className='pricing-container'><AiFillDollarCircle className='dollar'/><p>70</p></div>
            <h5>per month</h5>
            <div className='stuff'><CiCircleCheck />free food</div>
            <div className='stuff'><CiCircleCheck />High intensity</div>
            <div className='stuff'><CiCircleCheck />Swimming pool</div>
            <div className='stuff'><CiCircleCheck />Unlimited sauna</div>
            <div className='stuff'><CiCircleCheck />free WiFi</div>
            <div className='buy-btn'>
              BUY NOW
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Price