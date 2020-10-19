import React, { Component } from 'react'
import './header.css'
import Logo from '../../assets/logo.svg'

//Importing Icons
import { MenuIcon, GlobeIcon, MessageIcon, NotificationIcon } from '../icons/icons'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            newNotification: true,
            newMessage: true
        }
    }

    render() {
        const { newNotification, newMessage } = this.state
        return (
            <header>
                <div className="row">
                    <button id="toggle-sidebar">
                        <MenuIcon />
                    </button>
                    <div className="branding">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="lang">
                                <GlobeIcon />
                                EN
                            </li>
                            <li className={`${newMessage ? "active" : ""}`}>
                                <MessageIcon />
                            </li>
                            <li className={`${newNotification ? "active" : ""}`}>
                                <NotificationIcon />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;