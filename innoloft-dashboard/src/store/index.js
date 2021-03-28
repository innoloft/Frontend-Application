import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducer from "../pages/Product/product.slice";
import trlReducer from "../app/components/Attributes/attributes.slice";

const rootReducer = combineReducers({
  product: productReducer,
  trl: trlReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;
