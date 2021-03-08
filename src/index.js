import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';
import Routes from "Routes/routes"
import "Styles/styles.scss"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
