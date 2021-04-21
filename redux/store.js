import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import logger from 'redux-logger';

//our initial state
const initialState = {}

const middleware = [thunk]



if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}
//create our store
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(rootReducer, initialState, enhancer);







