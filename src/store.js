import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reduxStore/reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const initialState = {};

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
    const enhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);
    const store = createStore(persistedReducer, initialState, enhancers);
    const persistor = persistStore(store);
    return { store, persistor };
  }