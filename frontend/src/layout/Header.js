import React from 'react';
import { useGlobalState, setSidebarVisibility } from '../store';

const Header = () => {
    const [visible] = useGlobalState('sidebarVisibility');
    return (
        <header className="header">
            <button className="toggle-menu" onClick={() => setSidebarVisibility(!visible)}><i className="fa fa-bars"></i></button>
            <div className="logo"><h1>Test Project</h1></div>
        </header>
    );
}

export default Header;