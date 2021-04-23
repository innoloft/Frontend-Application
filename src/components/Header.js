import React from "react";

import classes from "../components/Header.css";

import logo from "../assets/1.png";

 const Header = () => {

    return (
        <div className={classes.Header}>
            <div className={classes.Header__Logo}>
              <img className={classes.Header__Logo__image} src={logo} alt="logo"/>
            </div>
           <div className={classes.Header__Right}>
             <a className={classes.item} href=" "><i className="fas fa-globe-africa"></i> En</a>
             <a className={classes.item} href=" "><i className="fas fa-envelope"></i></a>
             <a className={classes.item} href=" "><i className="fas fa-bell"></i></a>
           </div>   
        </div>
    )
}

export default Header
