import * as ACTIONTYPE from '../actions/actionTypes'

const initialState = false

export const navReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONTYPE.OPENNAV:
			return !state
		default:
			return state
	}
}
