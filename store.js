import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import state from './state';
import reducers from './reducers';

let store = createStore(reducers, state, applyMiddleware(thunk));

export default store;