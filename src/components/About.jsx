import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import '../components/About.css'
import aboutImage from '../assets/images/about.jpg'

function About() {
  return (
    <div className='about-container'>
        <div className='about-content'>
            <div className='items'>
                <div className='item-title'>GET FIT WITH US <IoMdInformationCircle className='info-icon'/></div>
                <div className='content-about'>
                    <div className='about-text'>
                        <h1>FITNESS JOURNEY</h1>
                        <p>  Through my client's fitness journey with me<br/>
                             I have coached many to achive their<br/>
                             fitness goals using a sustainable method<br/>
                             to improve their overall health</p>
                             <div className='about-button'>
                        BUY NOW
                    </div>
                    </div>
                    <div className='about-image'>
                        <img src={aboutImage} alt="about" />

                    </div>
                    

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About