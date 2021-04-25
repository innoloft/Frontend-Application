import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
    hidden: true
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.TOGGLE_MENU_SIDEBAR:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default menuReducer;