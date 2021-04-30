import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function trlReducer(state = initialState.trl, action) {
	switch (action.type) {
		case types.GET_TRL:
			return action.trl;
		case types.UPDATE_TRL:
			return state.map((trl) => (trl.id === action.trl.id ? action.trl : trl));
		case types.ADD_TRL:
			return [...state, { ...action.newTrl }];
		default:
			return state;
	}
}

export default trlReducer;
