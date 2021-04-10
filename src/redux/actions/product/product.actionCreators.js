/** @format */

import productTypes from '../../types/productTypes';

export const productLoading = (loadingState = true) => ({
	type: productTypes.PRODUCT_LOADING,
	payload: loadingState,
});

export const clearProductErrors = () => ({
	type: productTypes.CLEAR_PRODUCT_ERRORS,
});

export const getProductSuccess = (product) => ({
	type: productTypes.PRODUCT_SUCCESS,
	payload: product,
});
export const productError = (error = 'Something went wrong') => ({
	type: productTypes.PRODUCT_ERROR,
	payload: error,
});

export const editProductLoading = (loadingState = true) => ({
	type: productTypes.EDIT_PRODUCT_LOADING,
	payload: loadingState,
});

export const editProductSuccess = (product) => ({
	type: productTypes.EDIT_PRODUCT_SUCCESS,
	payload: product,
});

export const editProductError = (error = 'Something went wrong') => ({
	type: productTypes.EDIT_PRODUCT_ERROR,
	payload: error,
});
