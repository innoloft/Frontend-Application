import React from 'react';
import { NavItem } from './NavItem';
import { selectNav } from '../../features/nav/navSlice';
import { useSelector } from 'react-redux';



export const Nav: React.FC<{}> = () => {
    const isOpen = useSelector(selectNav)
    return (
        <ul className="nav" style={{transform: isOpen ? 'translateX(-100%)': 'translateX(0)' }}>
            <NavItem to="/" name="Main"/>
            <NavItem to="/dashboard" name="Dashboard"/>
        </ul>
    )
}