import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Product from './Product'

import logo from '../logo.svg';
import '../css/App.css';

const Logo = styled.img`
  filter: brightness(0) invert(1);
  height: calc(100% - 20px);
`;


function Home() {
  return null
}

function App() {
  return (
    <Router>
      <div>
        <div className="w-full flex items-center justify-between p-3 bg-indigo-900">
          <Logo src={logo} className="ml-2 sm:block max-w-xs hidden"/>
          <ul className="flex">
            <li className="px-3 text-indigo-200 text-xl cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 text-indigo-200 text-xl cursor-pointer">
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
