import React from 'react'
import navLogo from '../nav-logo.svg'

const Header: React.FC = () => {
        return (
            <nav>
                <div className="container">
                    <img src={navLogo} alt="Innoloft Logo" />
                </div>
            </nav>
        );
}


export default Header