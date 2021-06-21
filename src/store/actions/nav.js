import * as ACTIONS from './actionTypes'

export const setNav = () => async (dispatch) => {
	dispatch({ type: ACTIONS.OPENNAV })
}
