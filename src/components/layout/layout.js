import React, { useEffect, useState } from 'react';
import './layout.css';
import logo from '../../assets/image/logo.svg';
import { homeIcon, productIcon } from '../../assets/bootstrapIcon';
import { NavLink } from 'react-router-dom';
import MobileSideBar from '../mobileSideBar/mobileSideBar';
// import logo from '../../assets/image/innoloft-no-white-space.svg';

const Layout = (props) => {
    let path = props.children.props.location.pathname
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

    const [open, setOpen] = useState(false)

    useEffect(()=>{
        setOpen(false)
    },[path])


    const checkActiveNav = (nav) => path === nav
    return (
        <div>
            {open&&<MobileSideBar {...props} setClose={()=>{setOpen(false)}}/>}
            <header>
                <div className="page_res">
                    <div className="ham_bars" onClick={()=>{setOpen(!open)}}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div className="logo">
                        <img src={logo} alt={'...'} />
                    </div>
                </div>
            </header>
            <div className="layout_body page_res">
                <aside className="side_bar_nav">
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
                <div className="page_container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout