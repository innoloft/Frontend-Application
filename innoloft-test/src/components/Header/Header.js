import React, { useState } from 'react';
import { LogoWhite } from '../../img';
import './Header.scss';

const Header = ({ logo, mainColor }) => {
  const [headerClass, setHeaderClass] = useState('Header blue');
  const [display, setDisplay] = useState(true);
  const configId = Number(process.env.REACT_APP_APP_ID);
  console.log(mainColor);
  if (configId === 1) {
    window.addEventListener('scroll', function () {
      var value = window.scrollY;
      if (value === 0) {
        setHeaderClass('Header blue');
        setDisplay(true);
      } else {
        setHeaderClass('Header white');
        setDisplay(false);
      }
    });
  }

  return (
    <div
      className={headerClass}
      style={{ backgroundColor: configId === 2 ? mainColor : '' }}
    >
      {configId === 1 ? (
        display ? (
          <LogoWhite />
        ) : (
          <img src={logo} alt='logo' />
        )
      ) : (
        <img src={logo} alt='wrong' />
      )}
    </div>
  );
};

export default Header;
