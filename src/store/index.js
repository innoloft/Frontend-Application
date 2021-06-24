import { combineReducers, createStore } from "redux";

import { productReducer } from "./reducers";

export const store = createStore(
  combineReducers({ product: productReducer }),
  {}
);
