/** @format */

import configTypes from '../../types/configTypes';

const trlInitialState = {
  getConfigLoading: false,
  getConfigError: '',
  getConfigSuccess: {},
};

export const configReducer = (state = trlInitialState, action) => {
  switch (action.type) {
    case configTypes.CLEAR_CONFIG_ERRORS:
      return {
        ...state,
        getConfigError: '',
      };
    case configTypes.GET_CONFIG_ERROR:
      return {
        ...state,
        getConfigError: action.payload,
      };
    case configTypes.GET_CONFIG_SUCCESS:
      return {
        ...state,
        getConfigSuccess: action.payload,
        getConfigLoading: false,
      };
    case configTypes.GET_CONFIG_LOADING:
      return {
        ...state,
        getConfigLoading: action.payload,
      };
    default:
      return state;
  }
};
