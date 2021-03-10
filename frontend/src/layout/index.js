import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import {useGlobalState} from '../store';

const AdminLayout = props => {
    let [message] = useGlobalState('message');
    let [error] = useGlobalState('error');

    return (
        <div className="container">
            {message && <div className="notification message">{message}</div>}
            {error && <div className="notification alert">{error}</div>}
            <Header/>
            <div className="wrap">
                <Aside/>
                <div className="main">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AdminLayout;