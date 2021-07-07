import React from "react";
import { Route } from "react-router-dom";

import Main from "./pages/Main";
import Product from "./pages/Product";
import TopNavBar from "./components/layout/TopNavBar";
import SideNavBar from "./components/layout/SideNavBar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <TopNavBar />
      <div className="wrapper">
        <SideNavBar />
        <Route exact path="/" component={Main} />
        <Route path="/product" component={Product} />
      </div>
    </div>
  );
}

export default App;
