import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configReducer, productReducer } from "./reducers";
const rootReducer = combineReducers({
  appConfig: configReducer,
  product: productReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
