import React  from 'react';
import hamburger from '../../assets/icons/menu.png';
import logo from '../../assets/images/innoloft-logo.svg';

const Header = (props) => {
    return (
        <div className="header-container">
            { /* MAIN HEADER STARTS */}
            <div className="header-container__main-header">
                <div className="header-nav">
                    <div className="header-container__main-header__menu-hamburger mobile-hamburger">
                        <figure>
                            <img onClick={props.toggle} title="hamburger icon" alt="hamburger icon" src={hamburger} />
                        </figure>
                    </div>
                    <div className="header-container__main-header__brand-logo">
                        <figure>
                            <img  title="inofloft-logo" alt="inofloft-logo" src={logo} />
                        </figure>
                    </div>
                </div>
            </div>
            { /* MAIN HEADER ENDS */}

        </div>
    );
};
export default Header;
