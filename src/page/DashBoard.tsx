import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SideBar from '../components/SideBar';
import { getProduct } from '../redux/productSlice';
import { getTRL } from '../redux/trlSlice';
import Home from './MainPage';
import Product from './Product';

const DashBoard: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProduct())
      dispatch(getTRL())
    }, [dispatch])

        return (
            <div className='container' >
                <div className="dashboard">
                    <Router>
                        <SideBar />
                        <div className="main-dashboard">
                            <Switch>
                                <Route path="/product">
                                    <Product />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
}


export default DashBoard