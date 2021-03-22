/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers";
import { createInjectorsEnhancer } from "redux-injectors";

const hostname = window && window.location && window.location.hostname;

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = hostname.includes("innoloft")
    ? compose
    : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
          traceLimit: 30,
        })) ||
      compose;

  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
}
