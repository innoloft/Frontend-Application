import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redux/rootReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
