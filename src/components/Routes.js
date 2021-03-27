import '../App.scss';
import ReactGa from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing, viewProduct } from './index';

const Routes = () => {
  useEffect(() => {
    ReactGa.initialize('UA-163119480-1');
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products/:productId" component={viewProduct} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
