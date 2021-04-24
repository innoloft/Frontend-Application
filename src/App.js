import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './feature/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route strict path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
