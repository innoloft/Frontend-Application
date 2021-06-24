import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Product from './components/Product';
import './App.css';

function App() {
  const [sidebar, setSidebarState] = useState(false);
  const handleShowSidebar = () => setSidebarState(!sidebar);
  return (
    <div className="app">
      <Router>
        <Header showSidebar={handleShowSidebar} />
        <div className="app__body">
          <Sidebar display={sidebar} showSidebar={handleShowSidebar} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" exact component={Product} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
