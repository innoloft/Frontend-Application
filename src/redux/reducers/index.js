import { combineReducers } from "redux";
import product from "./productReducer";
import configuration from "./configurationReducer";
import trl from "./trlReducer";

const rootReducer = combineReducers({
	product,
	configuration,
	trl,
});

export default rootReducer;
