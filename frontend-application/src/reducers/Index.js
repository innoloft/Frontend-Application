import { FETCH_DATA } from "../action/Index";


const initState = {
  products: [],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}


