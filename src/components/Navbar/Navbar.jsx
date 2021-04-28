/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import './navbar.css';
import HideNav from './HideNav';

const Navbar = () => {
  const { hiddenNav } = HideNav();
  return (
    <div className="navbar-section page-general-color">
      <div className={`${hiddenNav}`}>
        <i className="fas fa-bars" />
      </div>
      <div className="logo-section">
        <img src="https://img.innoloft.de/logo.svg" alt="Logo" />
      </div>
      <div className="user-profile-section">
        <i
          className="fas fa-user"
        />
      </div>
    </div>
  );
};

export default Navbar;
