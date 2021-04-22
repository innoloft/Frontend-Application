import React from 'react';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';


export const Header: React.FC<{}> = () => {
    return(
        <div className="header">
            <div className="header container">
                <Hamburger />
                <Logo />
            </div>
        </div>
    )
}