import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarComponent() {
    return (
        <div className="page__container section__container">
            <nav className="navigation">
                <ul className="navigation__listOfTabs">
                    <li className="navigation__tab">
                        <Link to="/" className="page__link">
                            Main
                        </Link> 
                    </li>
                    <li className="navigation__tab">
                        <Link to="/product" className="page__link">
                            Product
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
