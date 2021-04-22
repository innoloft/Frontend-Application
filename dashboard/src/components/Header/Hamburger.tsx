import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectNav, updateNav } from '../../features/nav/navSlice';


export const Hamburger:React.FC<{}> =() => {
    const dispatch = useDispatch()
    const isOpen = useSelector(selectNav)

    return (
        <div className="hamburger" onClick={e => dispatch(updateNav(isOpen))}>
            <FaBars />
        </div>
    )
}