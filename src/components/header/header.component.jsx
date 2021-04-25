import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { toggleMenuSidebar } from '../../redux/menu/menu.actions';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ dispatch, config }) => {
    return (
        <header
            className="header"
            style={config && config.mainColor ? { background: config.mainColor} : null}>
            <div onClick={() => dispatch(toggleMenuSidebar())} className="menu-icon">
                <FontAwesomeIcon icon={faBars} color="white" size="2x" />
            </div>
            <div className="logo">
                <Logo />
            </div>
        </header>
    )
};

const mapStateToProps = state => ({
    config: state.config.config
});

export default connect(mapStateToProps)(Header);