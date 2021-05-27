import React from 'react';
import "./SideMenu.scss";
import {Link} from "react-router-dom";

const MenuItem = (props) => {
    const {to, children, icon,setActive,active,index} = props;
    return (
        <Link onClick={()=>setActive(index)} to={to} className={"item " + (active===index ? "active" : "")}>
            <i className={"fa fa-fw fa-" + icon}></i>
            <span>{children}</span>
        </Link>
    );
};

export default MenuItem;
