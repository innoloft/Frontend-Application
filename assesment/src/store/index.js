import { createStore, compose, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSageMiddleware();
const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;