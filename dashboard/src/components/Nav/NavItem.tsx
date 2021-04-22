import React from 'react';
import { Link } from 'react-router-dom';



interface NavItemProps{
    name: string
    to: string
    icon?: HTMLElement
} 

export const NavItem: React.FC<NavItemProps> = props => {
    return (
        <Link to={props.to} className="nav-item">
            <li>
                <div className="icon">
                    {props.icon}
                    <span>{props.name}</span>
                </div>
            </li>
        </Link>
    )
}