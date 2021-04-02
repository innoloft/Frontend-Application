import React from "react";
import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Logo
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="link">
              product
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
