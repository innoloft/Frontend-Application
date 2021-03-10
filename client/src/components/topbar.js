import React from 'react';
import '../css/layout.css';
import MobileNavigator from './mobileNavigator';

const Topbar = () => {
   return (
      <div id="topbar">
         <div className="logoContainer">
            <MobileNavigator />
            <img id="logo" src="https://img.innoloft.de/logo.svg"></img>-
         </div>
      </div>
   );
};

export default Topbar;
