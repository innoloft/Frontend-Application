import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ProductPage from './pages/product/product.component';
import Header from './components/header/header.component';
import SidebarMenu from './components/sidebar-menu/sidebar-menu.component';

import { fetchConfig } from './redux/config/config.actions';
import WithSpinner from './components/with-spinner/with-spinner.component';

class App extends React.Component {

  componentDidMount() {
    const { fetchConfig } = this.props;
    const appId = process.env.REACT_APP_APP_ID || 1;
    fetchConfig(appId);
  }

  render() {
    const { isLoading } = this.props;
    const App = () => (
      <div className="container">
        <Header />
        <div className="main">
          <SidebarMenu />
          <div className="dashboard">
            <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route path='/' component={ProductPage}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
    const AppWithSpinner = WithSpinner(App);
    return (
      <>
        <AppWithSpinner isLoading={isLoading} />
      </>
    )
  };
}

const mapStateToProps = state => ({
  isLoading: state.config.isFetchingConfig
})

const mapDispatchToProps = dispatch => ({
  fetchConfig: appId => dispatch(fetchConfig(appId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
