import React from 'react';
import { connect } from 'react-redux';
import SettingsForm from '../partials/Forms/SettingsForm';
import SideNav from '../partials/SideNav/SideNav';
import UserDetailsForm from '../partials/Forms/UserDetailsForm';

import style from './styles/UserAccountView.module.scss';


const mapStateToProps = (state) => ({
    shownTab: state.shownTab
})

const UserAccountView = ({ shownTab }) => {
    return (
        <div className={style.userAccountContainer}>
            <div className={style.innerUserContainer}>
                <div className={style.leftSide}>
                    <SideNav />
                </div>
                <div className={style.rightSide}>
                    <div className={style.tabContainer}>
                        {shownTab === 'myaccount' &&
                            <UserDetailsForm />
                        }

                        {shownTab === 'mysettings' &&
                            <SettingsForm />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(UserAccountView);
