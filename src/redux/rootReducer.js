import { combineReducers } from "redux";
import productReducer from "./productReducer";

// Reducer
export const rootReducer = combineReducers({
  product: productReducer,
});
