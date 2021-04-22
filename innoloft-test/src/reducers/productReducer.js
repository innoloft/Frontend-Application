import {
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  FETCH_TRL_FAIL,
  FETCH_TRL_SUCCESS,
} from '../constants/productConstants';

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getTrlReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRL_SUCCESS:
      return {
        trl: action.payload,
      };
    case FETCH_TRL_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
