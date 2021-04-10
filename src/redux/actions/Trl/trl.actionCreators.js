/** @format */

import trlTypes from '../../types/trlTypes';

export const getTrlLoading = (loadingState = true) => ({
	type: trlTypes.GET_TRL_LOADING,
	payload: loadingState,
});

export const clearTrlErrors = () => ({
	type: trlTypes.CLEAR_TRL_ERRORS,
});

export const getTrlSuccess = (trl) => ({
	type: trlTypes.GET_TRL_SUCCESS,
	payload: trl,
});
export const getTrlError = (error = 'Something went wrong') => ({
	type: trlTypes.GET_TRL_ERROR,
	payload: error,
});
