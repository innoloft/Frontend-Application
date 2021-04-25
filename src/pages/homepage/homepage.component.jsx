import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo_1.svg';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <h1>Welcome!</h1>
        <div className="logo">
            <Logo />
        </div>
    </div>
);

export default HomePage;