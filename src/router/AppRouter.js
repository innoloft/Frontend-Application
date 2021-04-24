import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Product from '../components/Product';
import Layout from '../layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../config/globalConstants';
import { fetchConfiguration, getConfigurationError, getConfigurationPending, getConfigurationState } from '../redux/action/index';

const RouterContainer = (componentHOC) =>(
    <Fragment>
        <Layout content={componentHOC} />
    </Fragment>
);

const AppRouter = (props) =>{

    useEffect(() => {
        const {fetchConfiguration} = props;

        fetchConfiguration(config.APP_ID);

    }, []);

    return(
        <BrowserRouter> 
            <Fragment>
                <Switch>
                <Route path="/" exact={true} component={()=> RouterContainer(Dashboard)} />
                <Route path="/product" exact={true} component={()=> RouterContainer(Product)} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
}

const mapStateToProps = state => ({
    error: getConfigurationError(state),
    configurations: getConfigurationState(state),
    pending: getConfigurationPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchConfiguration
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppRouter);