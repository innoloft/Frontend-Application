import React from 'react'

import { FaHome } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import './Asid.css';

function Asid() {
    return (
        <div className="asid">
            <p><FaHome /> <span>Home</span> </p>
            <p><FaBullhorn /> <span>My Account</span> </p>
            <p><FaBuilding /> <span>My Company</span> </p>
            <p><FaRegNewspaper /> <span>News</span> </p>
            <p><MdSettings /> <span>Sttings</span> </p>
            <p><BsGraphUp /> <span>Analytics</span> </p>
        </div>
    )
}

export default Asid
