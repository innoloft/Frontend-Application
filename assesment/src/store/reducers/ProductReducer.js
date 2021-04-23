import { GET_POSTS, GET_TRL } from "../actions/Product.actions";

const initialState = {
  product: {},
  trl:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        product: action.payload,
      };
    case GET_TRL:
      return {
        ...state,
        trl: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
