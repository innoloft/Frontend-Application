import {
  FETCH_CONFIG_FAIL,
  FETCH_CONFIG_SUCCESS,
} from '../constants/productConstants';

export const getConfigReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONFIG_SUCCESS:
      return {
        loading: false,
        config: action.payload,
      };
    case FETCH_CONFIG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
