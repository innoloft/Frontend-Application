/**
 * Loader reducer
 * @author Douglasacost
 */

export default (state = { isLoading: false, isMenuOpen: false }, action) => {
    switch (action.type) {
        case 'UPDATE_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'UPDATE_IS_MENU_OPEN':
            return {
                ...state,
                isMenuOpen: action.payload
            }
        default:
            return state
    }
}