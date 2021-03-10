import React from 'react';
import App from './App';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import ProductPage from './components/productPage/productPage';

const Routes = () => {
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={MainPage} />
               {/* <PublicRoute exact path="/signup" component={Signup} /> */}
               <Route exact path="/product" component={ProductPage} />
            </Switch>
         </BrowserRouter>
      </>
   );
};

export default Routes;
