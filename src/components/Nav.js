import React from 'react';
import travelLogo from '../images/travel-logo.png';

const Nav = () => {
  return (
    <nav className='nav--container'>
      <img src={travelLogo} alt='travel logo' className='nav--img' />
      <h2 className='nav--title'>my travel journal.</h2>
      <h3 className='nav--subtitle'>Personal Project</h3>
    </nav>
  );
};

export default Nav;
