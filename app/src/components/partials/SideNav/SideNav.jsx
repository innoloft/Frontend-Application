import React from 'react';
import { SIDE_NAV_TABS } from '../../../static/constants/constants';
import SideNavLink from './SideNavLink';

import style from './styles/SideNav.module.scss';


const SideNav = () => {
    return (
        <div className={style.sideNav}>
            {SIDE_NAV_TABS.map((tab) => <SideNavLink name={tab} />)}
        </div>
    )
}

export default SideNav;