import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import configurationReducer from "./configuration/configurationsReducer";

const rootReducer = combineReducers({
  product: productReducer,
  configuration: configurationReducer,
});

export default rootReducer;
