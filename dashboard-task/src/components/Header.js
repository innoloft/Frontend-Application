import React from "react";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ toggleNavbar }) {
  const configuration = useSelector((store) => store.configuration.configurationData);

  return (
    <div className="header" style={{ background: configuration.mainColor }}>
      <GiHamburgerMenu className="hamburger-menu" onClick={() => toggleNavbar()} />
      <img src={configuration.logo} alt="logo" style={{ color: configuration.mainColor }} />
    </div>
  );
}

export default Header;
