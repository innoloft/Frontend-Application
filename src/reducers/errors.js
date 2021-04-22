import { SET_ERRORS } from "../actions/types"

const errors = (state = null, action) => {
  if (action.type === SET_ERRORS) {
    return action.payload;
  }
  return state;
}

export default errors;
