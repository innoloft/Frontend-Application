import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function productReducer(state = initialState.product, action) {
	switch (action.type) {
		case types.GET_PRODUCT_DETAILS:
			return action.product;
		case types.UPDATE_PRODUCT_DETAILS:
			return action.updatedProduct;
		case types.ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, { ...action.newCategory }],
			};
		case types.ADD_BUSINESSMODEL:
			return {
				...state,
				businessModels: [
					...state.businessModels,
					{ ...action.newBusinessModel },
				],
			};
		default:
			return state;
	}
}

export default productReducer;
