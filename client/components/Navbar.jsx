import React from 'react';
import cart_icon from '../assets/cart_icon.png';

const NavBar = () => {


  return (
    <div className='navBar'>
      <span>NavBar: Charizard: Books That Rock</span>
      <img src={cart_icon} />
    </div>
  );

};

export default NavBar;