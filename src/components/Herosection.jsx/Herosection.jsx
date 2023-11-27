import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import '../../styles/herosection.css';


function Herosection() {
  const [button, setButton] = useState(true);
  const [ham, setHam] = useState(false); // Set initial state to false
  

  const setbutton = () => {
    setButton(!button);
    setHam(!ham);
  };

  return (
    <div className='herosection'>
      <div className='navlinks'>
        <div className='links'>
          <div className='logo'>
            <h2>GYM FREAK </h2>
            {button ? (
              <RxHamburgerMenu className='hamburger' onClick={setbutton} />
            ) : (
              <ImCross className='hamburger' onClick={setbutton} />
            )}
          </div>
          <>
            {ham ? (
              (
                <>
                  <a href='sd' className='active'>
                    Home
                  </a>
                  <a href='sd' className='active'>
                    About
                  </a>
                  <a href='sd' className='active'>
                    Pricing
                  </a>
                  <a href='sd' className='active'>
                    Contact us
                  </a>
                  <BsSearch className='search' />
                </>
              )
            ) : <p></p>}
          </>
        </div>
      </div>
    </div>
  );
}

export default Herosection;



