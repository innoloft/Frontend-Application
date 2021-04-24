import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';


const Dashboard = () =>(
    <Fragment>
        <div className="product-container">
            <div className="product-container__left-section">
                {/* Product Image Starts */}
                <div className="product-container__left-section__product-image-container">
                    <figure>
                        <img src={logo} alt="product" />
                    </figure>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Dashboard;