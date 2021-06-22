import React from 'react';
import logo from '../../../static/media/logo_innoloft.png';

import style from './styles/Header.module.scss';

const Header = () => {
    return (
        <div className={style.headerContainer}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header;
