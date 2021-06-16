import { MOBILE_NAV_TOGGLE } from "../constants";

const defaultState = {
  showMobileNav: false,
};

export const toggleMobileNav = () => ({
  type: MOBILE_NAV_TOGGLE,
});

const mobileNavReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOBILE_NAV_TOGGLE:
      return Object.assign({}, state, {
        showMobileNav: !state.showMobileNav,
      });

    default:
      return state;
  }
};

export default mobileNavReducer;
