import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';

const App = () => (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/product' component={Product} />
      </Switch>
    </HashRouter>
);

export default App;
