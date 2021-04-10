/** @format */

import trlTypes from '../../types/trlTypes';

const trlInitialState = {
	getTrlLoading: false,
	getTrlError: '',
	getTrlSuccess: [],
};

export const trlReducer = (state = trlInitialState, action) => {
	switch (action.type) {
		case trlTypes.CLEAR_TRL_ERRORS:
			return {
				...state,
				getTrlError: '',
			};
		case trlTypes.GET_TRL_ERROR:
			return {
				...state,
				getTrlError: action.payload,
			};
		case trlTypes.GET_TRL_SUCCESS:
			return {
				...state,
				getTrlSuccess: [...action.payload],
				getTrlLoading: false,
			};
		case trlTypes.GET_TRL_LOADING:
			return {
				...state,
				getTrlLoading: action.payload,
			};
		default:
			return state;
	}
};
