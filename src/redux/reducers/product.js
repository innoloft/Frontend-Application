import { PRODUCT_ACTION } from "../actions";

const initialState = {
  data: {},
  loading: true,
  trl:[]
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_ACTION.LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case PRODUCT_ACTION.FETCH_PRODUCT: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    case PRODUCT_ACTION.CLEAR_PRODUCT: {
      return {
        ...state,
        data: {},
        loading: false
      };
    }
    case PRODUCT_ACTION.FETCH_TRL: {
      return {
        ...state,
        trl: action.payload,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
