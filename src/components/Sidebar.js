import React from 'react';
import { Link } from 'react-router-dom';
import close from '../close-icon.png';

const Sidebar = ({ display, showSidebar }) => {
  return (
    <div className={display ? 'sidebar nav-active' : 'sidebar'} onClick={showSidebar}>
      <img src={close} className="close-icon" alt=""  onClick={showSidebar}/>
      <h3><Link to="/">Home</Link></h3>
      <h3><Link to="/product">Product</Link></h3>
    </div>
  )
}

export default Sidebar;