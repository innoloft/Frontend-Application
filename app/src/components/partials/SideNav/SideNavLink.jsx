import React from 'react';
import { connect } from 'react-redux';

import style from './styles/SideNav.module.scss';

const mapDispatchToProps = (dispatch) => ({
    switchShownTab: (tab) => {
        dispatch({ type: "SWITCH_SHOWN_TAB", payload: tab })
    }
})

const SideNavLink = ({ name, switchShownTab }) => {
    const switchTab = () => {
        const tabName = name.toLowerCase().split(' ').join('');
        switchShownTab(tabName);
    }

    return (
        <div className={style.sideNavLink} onClick={switchTab}>
            {name}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SideNavLink);