import React from 'react';
import './assets/scss/App.scss';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import { BaseRouter } from './components/Router/BaseRouter';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content>
          <BaseRouter />
        </Content>
      </Router>
    </div>
  );
}

export default App;
