//here this reducer is the base object that represent all of the state of our application
//combines all of our states together
//use 'combineReducer' to combine all the reducers together

import {combineReducers} from 'redux';

import dataReducer from './reducers/data-reducer'
//the configuration object that we want redux persist to use


const rootReducer = combineReducers({
    data: dataReducer,
});
export default rootReducer