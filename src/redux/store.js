import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./saga";
import { dataReducer } from "./data/DataReducer";
import persistState from "redux-localstorage";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    data: dataReducer
  }),

    compose(
        applyMiddleware(initialiseSagaMiddleware),
        persistState()
    )
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
