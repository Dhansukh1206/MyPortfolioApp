import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assert/me.png';

const Header = () => {
  return (
    <div className='container header_container'>
      <h5>Hello I'm</h5>
      <h1>Dhansukh Katariya</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
      <div className="me">
        <img src={ME} alt="" />
      </div>
    </div>
  )
}

export default Header