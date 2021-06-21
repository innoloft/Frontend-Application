import * as ACTIONTYPE from '../actions/actionTypes'

const initialState = {
	id: null,
	name: null,
	description: null,
	picture: null,
	type: null,
	categories: [],
	implementationEffortText: null,
	investmentEffort: null,
	trl: null,
	user: null,
	company: null,
	businessModels: [],
}

export const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONTYPE.GETPRODUCT:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}
