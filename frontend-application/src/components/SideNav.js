import React from "react";
import {Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
      <ul>
        <Link to="/" className="side_link">
          Home
        </Link>
        <Link to="/product" className="side_link">
          product
        </Link>
      </ul>
    </>
  );
};

export default SideNav;
