/** @format */

import { APIService } from '../../../config/api';

import {
  getConfigError,
  clearConfigErrors,
  getConfigLoading,
  getConfigSuccess
} from './config.actionCreators';

export const getConfig = () => async (dispatch) => {
  dispatch(clearConfigErrors());
  dispatch(getConfigLoading());
  try {
    const configRequest = await APIService.get(`/configuration/${process.env.REACT_APP_ID || 1}/`);
    dispatch(getConfigSuccess(configRequest.data));
    return { fulfilled: true, message: 'Config fetched successfully', config: configRequest.data };
  } catch (error) {
    dispatch(getConfigError(error));
    dispatch(getConfigLoading(false));
  }
};
