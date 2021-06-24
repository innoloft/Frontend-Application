import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FULLFILLED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./actions";

const initialState = {
  projects: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return state;

    case FETCH_PRODUCT_FULLFILLED:
      const { payload } = action;
      return { ...state, products: payload };

    case FETCH_PRODUCT_SUCCESS:
      return state;

    case FETCH_PRODUCT_FAILURE:
      return state;

    default:
      return state;
  }
};
