import { createStore , combineReducers, applyMiddleware, compose } from 'redux';
import { configurationReducer } from '../reducers/index';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            configuration: configurationReducer,
        }),
        composeEnhancer(applyMiddleware(...middlewares))
    );
    return store;
}; 