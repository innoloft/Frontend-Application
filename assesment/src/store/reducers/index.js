import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
  product: ProductReducer,
});

export default rootReducer;
