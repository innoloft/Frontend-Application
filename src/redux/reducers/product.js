import { PRODUCT_INITIAL_DATA } from "../constants";

const defaultState = {
  id: null,
  name: "",
  type: {},
  picture: "",
  description: "",
  categories: [],
  businessModels: [],
  trl: {},
};

export const setInitialProductData = ({
  id,
  name,
  type,
  picture,
  description,
  categories,
  businessModels,
  trl,
}) => ({
  type: PRODUCT_INITIAL_DATA,
  payload: {
    id,
    name,
    type,
    picture,
    description,
    categories,
    businessModels,
    trl,
  },
});

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_INITIAL_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default productReducer;
