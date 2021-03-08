import { productActionTypes } from "./productActionTypes";

const INITIALSTATE = {
  product: [],
  isLoading: false,
  error: null,
};

const productReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case productActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    case productActionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
