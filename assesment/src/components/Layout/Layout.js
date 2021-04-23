import React from 'react';
import {Route} from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Product from '../Product/Product';

function Layout(props) {
    return (
        <div className='layout'>
            <Header/>
            <Sidebar/>
            <div className='site__content'>
                <Route exact path='/' render={() => <div>Main Page</div>} />
                <Route exact path='/product' component={Product} />
            </div>
        </div>
    );
}

export default Layout;