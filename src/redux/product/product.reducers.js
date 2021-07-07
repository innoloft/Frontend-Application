import productActionTypes from "./product.types";

const initialState = {
  product: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case productActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    case productActionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
