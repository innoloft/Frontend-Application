import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import Product from './Product/Product';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Router = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div className="switch-section">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default Router;
