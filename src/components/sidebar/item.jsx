import React from 'react'
import { NavLink } from 'react-router-dom'

const AsideItem = (props) => {
    return (
        <li>
            {props.path === '/' ?
                <NavLink to={props.path} activeClassName='active' exact>
                    {props.icon()}
                    <span>{props.title}</span>
                </NavLink> :
                <NavLink to={props.path} activeClassName='active'>
                    {props.icon()}
                    <span>{props.title}</span>
                </NavLink>
            }
        </li>
    )
}

export default AsideItem