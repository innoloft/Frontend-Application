import { SET_PRODUCT } from "../actions/types";

const product = (state = {}, action) => {
  if (action.type === SET_PRODUCT) {
    return action.product;
  }
  return state;
};

export default product;
