import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faBullhorn,
  faBuilding,
  faCog,
  faNewspaper,
  faChartArea,
  faGlobeAmericas,
  faBell,
  faEnvelope,
  faCheckCircle,
  faQuestionCircle,
  faTimes,
  faBars  
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHome,
  faBullhorn,
  faBuilding,
  faCog,
  faNewspaper,
  faChartArea,
  faGlobeAmericas,
  faBell,
  faEnvelope,
  faQuestionCircle,
  faCheckCircle,
  faTimes,
  faBars
)

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
