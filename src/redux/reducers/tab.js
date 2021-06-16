import { TAB_TOGGLE } from "../constants";

const defaultState = {
  tabIndex: 0,
};

export const toggleTab = () => ({
  type: TAB_TOGGLE,
});

const tabReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TAB_TOGGLE:
      return Object.assign({}, state, {
        tabIndex: Math.abs(state.tabIndex - 1),
      });

    default:
      return state;
  }
};

export default tabReducer;
