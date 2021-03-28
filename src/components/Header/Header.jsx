import React from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Logo height="4em" width="16em" />
    </div>
  );
};

export default Header;
