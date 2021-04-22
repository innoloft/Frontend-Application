import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <div className="nav">
        <Link className="nav__link" to="/">
          Dashboard
        </Link>
      </div>
      <div className="nav">
        <Link className="nav__link" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
