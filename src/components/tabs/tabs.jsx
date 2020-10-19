import React from 'react'
import { NavLink } from 'react-router-dom'
import './tabs.css'

function Tabs() {
    return (
        <div className="tabs">
            <ul>
                <li>
                    <NavLink to='/settings' activeClassName='active' exact>Main Information</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/advanced' activeClassName='active'>Additional Information</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Tabs