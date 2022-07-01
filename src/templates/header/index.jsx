import React from 'react';

import Logo from '../../atoms/logo';
import NavBar from '../../molecules/navBar';

import "./styles.scss"

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
      </div>
      <div className='header__nav-bar'>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;