import React, { Component } from 'react'
import './sidebar.css'

//Importing sidebar list and icon components
import { HomeIcon, UserIcon, JobIcon, CogIcon, NewsIcon, ChartIcon } from '../icons/icons'
import AsideItem from './item'

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            draw: false
        }
        this.ToggleMobileMenu = this.ToggleMobileMenu.bind(this)
    }

    componentDidMount() {
        const ToggleButton = document.querySelector('#toggle-sidebar')
        const MobileMenu = document.querySelector('aside')
        if (ToggleButton) ToggleButton.addEventListener('click', this.ToggleMobileMenu)
        if (MobileMenu) MobileMenu.addEventListener('click', this.ToggleMobileMenu)
    }

    ToggleMobileMenu() {
        this.setState({ draw: !this.state.draw })
    }

    render() {
        const { draw } = this.state
        return (
            <aside className={`${draw ? 'draw-mobile' : ""}`}>
                <ul>
                    <AsideItem path='/' icon={HomeIcon} title='Home' />
                    <AsideItem path='/account' icon={UserIcon} title='My Account' />
                    <AsideItem path='/company' icon={JobIcon} title='My Company' />
                    <AsideItem path='/settings' icon={CogIcon} title='My Settings' />
                    <AsideItem path='/news' icon={NewsIcon} title='News' />
                    <AsideItem path='/analytics' icon={ChartIcon} title='Analytics' />
                </ul>
            </aside>
        )
    }
}

export default Sidebar;