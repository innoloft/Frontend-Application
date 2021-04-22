import { SET_FETCHING } from "../actions/types"

const fetching = (state = false, action) => {
  if (action.type === SET_FETCHING) {
    return action.payload;
  }
  return state;
}

export default fetching;
