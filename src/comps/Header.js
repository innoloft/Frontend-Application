import React from 'react';
import './Header.css'
import { MdEmail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";

function Header() {
    return (
        <div className="nav">
            <h1>LOGO</h1>
            <ul>
                <li><RiEarthFill /> <span className="spcial">EN</span></li>
                <li><MdEmail /></li>
                <li><BsFillBellFill /></li>
            </ul>
        </div>
    )
}

export default Header
