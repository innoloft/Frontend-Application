import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const configureStore = (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Saga
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  // Push middlewares
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));
  // const store = createStore(
  //   rootReducer,
  //   compose(...enhancers, !!window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  // );

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;

