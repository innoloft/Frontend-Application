/** @format */

import { APIService } from '../../../config/api';

import {
	getTrlError,
	getTrlLoading,
	getTrlSuccess,
	clearTrlErrors
} from './trl.actionCreators';

export const getTRL = (d) => async (dispatch) => {
	dispatch(clearTrlErrors());
	dispatch(getTrlLoading());
	try {
		const trlRequest = await APIService.get(`/trl/`);
		dispatch(getTrlSuccess(trlRequest.data));
		return { fulfilled: true, message: 'TRL fetched successfully' };
	} catch (error) {
		dispatch(getTrlError(error));
		dispatch(getTrlLoading(false));
	}
};
