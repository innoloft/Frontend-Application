import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Home from '../Home';
import UserSettings from '../UserSettings';
import Company from '../Company';
import Settings from '../Settings';
import News from '../News';

import "../../assets/scss/App.scss";
import "../../assets/scss/theme.scss";
import '../../assets/scss/font_awesome.scss';
import AdminLayout from "../../layout";

const App = props => (
  <Fragment>
    <BrowserRouter>
      <AdminLayout>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/account' component={UserSettings}/>
          <Route path='/company' component={Company}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/news' component={News}/>
          <Redirect from="/" to="/home"/>
        </Switch>
      </AdminLayout>
    </BrowserRouter>
  </Fragment>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
