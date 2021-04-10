/** @format */

import productTypes from '../../types/productTypes';

const productInitialState = {
	productLoading: false,
	product: {},
	productError: '',
	editProductLoading: false,
	editProductSuccess: {},
	editProductError: '',
};

export const productReducer = (state = productInitialState, action) => {
	switch (action.type) {
		case productTypes.CLEAR_PRODUCT_ERRORS:
			return {
				...state,
				productError: '',
			};
		case productTypes.PRODUCT_ERROR:
			return {
				...state,
				productError: action.payload,
			};
		case productTypes.PRODUCT_SUCCESS:
			return {
				...state,
				product: action.payload,
				productLoading: false,
			};
		case productTypes.PRODUCT_LOADING:
			return {
				...state,
				productLoading: action.payload,
			};

		case productTypes.EDIT_PRODUCT_LOADING:
			return {
				...state,
				editProductLoading: action.payload,
			};

		case productTypes.EDIT_PRODUCT_SUCCESS:
			return {
				...state,
				editProductLoading: false,
				editProductSuccess: action.payload,
			};
		case productTypes.EDIT_PRODUCT_ERROR:
			return {
				...state,
				editProductLoading: false,
				editProductError: action.payload,
			};

		default:
			return state;
	}
};
