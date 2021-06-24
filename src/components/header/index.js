import React from "react";
import logo from "../../assets/header_logo.png";
import './styles.scss';

const Header = () => {

  return (
    <div className={'Header'}>
      <div className={'Header__Logo'}>
        <img className={'Header__Logo__image'} src={logo} alt="logo" />
      </div>
      <div className={'Header__Right'}>
        <a className={'item'} href=" "><i className="fas fa-globe-africa"></i> En</a>
        <a className={'item'} href=" "><i className="fas fa-envelope"></i></a>
        <a className={'item'} href=" "><i className="fas fa-bell"></i></a>
      </div>
    </div>
  )
}

export default Header;
