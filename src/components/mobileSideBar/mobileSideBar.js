import React from 'react';
import { NavLink } from 'react-router-dom';
import { homeIcon, productIcon } from '../../assets/bootstrapIcon';
import './mobileSideBar.css'



const MobileSideBar = (props) => {
    let navigationItems = [
        {
            name: 'Home',
            path: '/',
            icon: homeIcon
        },
        {
            name: 'Product',
            path: '/product',
            icon: productIcon
        }
    ]

    let path = props.children.props.location.pathname

    const checkActiveNav = (nav) => path === nav

    return (
        <div className="drawer_wrapper">
            <aside className="mobile_side_bar">
                <ul className="nav_list">
                    {
                        navigationItems.map((x, i) => (
                            <NavLink to={x.path} className={`nav_link ${checkActiveNav(x.path) && 'active_nav'}`}>
                                <li>
                                    <span className="nav_icon">
                                        {x.icon}
                                    </span>
                                    <span>
                                        {x.name}
                                    </span>
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </aside>
            <div className="drawer_background" onClick={props.setClose}></div>
        </div>
    )
}

export default MobileSideBar