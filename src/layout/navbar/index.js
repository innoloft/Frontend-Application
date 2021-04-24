import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import home from '../../assets/icons/home.png';
import product from '../../assets/icons/product.png';

const Navbar = () => {
    const navList = [
        {
            name: 'Main page',
            url: '/',
            src: home,
        },
        {
            name: 'Product',
            url: '/Product',
            src: product,
        },
    ]
    return (
        <Fragment>
            <nav className="side-menu-container">
                <ul>
                {
                    navList && navList.map((res,index)=>{
                        return <Link to={res.url}><li key={index}><img alt={res.name} src={res.src} />{res.name}</li></Link>
                    })
                }
                </ul>
            </nav>
        </Fragment>
    )
};

export default Navbar;
