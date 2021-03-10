import React from "react";
import { Link } from 'react-router-dom';
import { useGlobalState } from '../store';

const Aside = () => {
    const [visible] = useGlobalState('sidebarVisibility');

    return (
        <aside className={"sidebar" + (visible ? ' show' : ' hide')}>
            <ul className="nav">
                <li className="nav-item"><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                <li className="nav-item"><Link to="/account"><i className="fa fa-bullhorn"></i>My Account</Link></li>
                <li className="nav-item"><Link to="/company"><i className="fa fa-building"></i>My Company</Link></li>
                <li className="nav-item"><Link to="/settings"><i className="fa fa-cog"></i>My settings</Link></li>
                <li className="nav-item"><Link to="/news"><i className="fa fa-newspaper"></i>News</Link></li>
            </ul>
        </aside>
    );
};

export default Aside;