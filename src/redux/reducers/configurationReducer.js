import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function configurationReducer(state = initialState.configuration, action) {
	switch (action.type) {
		case types.GET_CONFIGURATION:
			return action.config;
		default:
			return state;
	}
}

export default configurationReducer;
