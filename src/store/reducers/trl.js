import * as ACTIONTYPE from '../actions/actionTypes'

const initialState = []

export const trlReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONTYPE.GETTRL:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}
