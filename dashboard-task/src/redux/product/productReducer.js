import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PUT_PRODUCT_ERROR,
  PUT_PRODUCT_REQUEST,
  PUT_PRODUCT_SUCCESS,
} from "./productTypes";

const initialState = {
  loading: false,
  productData: {},
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productData: action.payload,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PUT_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PUT_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case PUT_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
