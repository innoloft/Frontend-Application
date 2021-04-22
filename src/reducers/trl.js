import { SET_TRL } from "../actions/types";

const trl = (state = {}, action) => {
  if (action.type === SET_TRL) {
    return action.trl;
  }
  return state;
};

export default trl;
