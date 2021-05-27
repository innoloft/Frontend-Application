import React from 'react';
import "./Header.scss"
import Logo from "./../assets/images/innoloft-no-white-space.svg"
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <img className={"logo"} alt={"Dashboard"} src={Logo}/>
            <div className={"buttons"}>
                <Link to={"/"}><i className="fa fa-fw fa-globe"></i><span>EN</span></Link>
                <Link to={"/"}><i className="fa fa-fw fa-envelope"><span className={"badge"}></span></i></Link>
                <Link to={"/"}><i className="fa fa-fw fa-bell"><span className={"badge"}></span></i></Link>
            </div>
        </div>
    );
};

export default Header;
