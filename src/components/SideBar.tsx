import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';


const SideBar: React.FC = () => {
    const {pathname} = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false)
        return (
            <>
            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <span className= {`line ${isOpen ? " open": ""}`} ></span>
            </div>
            <div className={`sidebar-wrapper ${isOpen ? " open": ""}`}>
                <ul>
                    <li>
                        <Link  to="/">
                            <div className={`link-wrapper ${pathname === '/' ? 'active' : ''}`}>
                                Main Page
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link  to="/product">
                            <div className={`link-wrapper ${pathname === '/product' ? 'active' : ''}`}>
                                Product
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            </>
        );
}


export default SideBar