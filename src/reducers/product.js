import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_LOADING,
} from '../actions/product';

const initialState = {
  product: {},
  error: '',
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: '',
        loading: false,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        product: {},
        error: action.payload,
        loading: false,
      };
    case FETCH_PRODUCT_LOADING:
      return {
        ...state,
        product: {},
        error: '',
        loading: true,
      };
    default:
      return state;
  }
};

export default productReducer;
