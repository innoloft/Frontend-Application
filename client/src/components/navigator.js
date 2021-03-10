import React from 'react';
import '../css/layout.css';
import { Link } from 'react-router-dom';

const Navigator = () => {
   return (
      <div className="sidebar">
         <ul className="sidelist">
            <li className="sideitem">
               <Link to="/">
                  <i class="fas fa-home"></i> Main Page
               </Link>
            </li>
            <li className="sideitem">
               <Link to="/product">
                  <i class="fas fa-users"></i> Product
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default Navigator;
