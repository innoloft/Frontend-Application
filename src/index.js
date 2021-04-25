import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import configureStore from './redux/store/storeConfig';

const store = configureStore();

const template =(
    <Fragment>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </Fragment>
);

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
