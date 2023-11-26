import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import '../../styles/herosection.css';


function Herosection() {

  
  
  return (
    <div className='herosection'>
      <div className='navlinks'>
        <div className='links'>
          <div className='logo'><h2>GYM FREAK</h2>
          </div>
          <a href='sd'className='active'>Home</a>
          <a href='sd'className='active'>About</a>
          <a href='sd'className='active'>Pricing</a>
          <a href='sd'className='active'>Contact</a> 
         <BsSearch className='search' />
         <RxHamburgerMenu className='hamburger'/>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
