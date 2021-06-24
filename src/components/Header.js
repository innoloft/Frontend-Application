import React from 'react';

import logo from '../logo.svg';
import hamburger from '../hamburger-icon-3.png';

const Header = ({ showSidebar }) => {
  return (
    <header className="header">
      <img src={hamburger} className="nav-icon" alt="hamburger"  onClick={showSidebar}/>
      <img src={logo} className="logo" alt="logo" />
    </header>
  )
}

export default Header;