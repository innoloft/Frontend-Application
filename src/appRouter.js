import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Layout from './components/layout/layout';
import HomePage from './pages/homePage/homePage';
import ProductPage from './pages/productPage/productPage';








const AppRouter = ({ Component, path, exact, purpose, auth, ...rest }) => {
    return (
        <Route exact={exact} path={path} {...rest} render={(props) => {
            return (
                <Layout>
                    <Component {...rest} {...props} />
                </Layout>
            )
        }} />
    )
}

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <AppRouter path="/" Component={HomePage} exact={true} />
                <AppRouter path="/product" Component={ProductPage} exact={true} />
            </Switch>
        </Router>


    )
}

export default AppRoute