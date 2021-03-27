import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';
import initialState from './initialState';

const middlewares = [thunk];
const store = createStore(combineReducers(allReducers), initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
