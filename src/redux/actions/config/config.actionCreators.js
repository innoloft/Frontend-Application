/** @format */

import configTypes from '../../types/configTypes';

export const getConfigLoading = (loadingState = true) => ({
  type: configTypes.GET_CONFIG_LOADING,
  payload: loadingState,
});

export const clearConfigErrors = () => ({
  type: configTypes.CLEAR_CONFIG_ERRORS,
});

export const getConfigSuccess = (config) => ({
  type: configTypes.GET_CONFIG_SUCCESS,
  payload: config,
});
export const getConfigError = (error = 'Something went wrong') => ({
  type: configTypes.GET_CONFIG_SUCCESS,
  payload: error,
});
