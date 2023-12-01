import {FaBars,FaTimes} from 'react-icons/fa';
import React from 'react'
import { useRef } from 'react';
import '../../styles/herosection.css';


function Navbar() {
    const navRef = useRef();
    const showNavbar = ()=>
    {
        navRef.current.classList.toggle('responsive_nav');
    }
  return (
    <>
    <header className='background'>
      
        <nav  className="navs" ref={navRef}>
            <h2>Logo</h2>
            <a href='#'>Home</a>
            <a href='#'>Shop</a>
            <a href='#'>Contact</a>
            <a href='#'>About</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>

        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>

    </header>
    <div className='hero'>
      <div className='hero-text'>
        <h1 className='moto'>CONQUER</h1>
        <div className='hero-button'>
          EXPLORE
        </div>
      </div>

    </div>
    </>
  )
}

export default Navbar