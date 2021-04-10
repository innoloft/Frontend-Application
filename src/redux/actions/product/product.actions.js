/** @format */

import { APIService } from '../../../config/api';

import {
	productLoading,
	clearProductErrors,
	getProductSuccess,
	productError,
	editProductLoading,
	editProductSuccess,
	editProductError,
} from './product.actionCreators';

export const getProduct = () => async (dispatch) => {
	dispatch(clearProductErrors());
	dispatch(productLoading());
	try {
		const productRequest = await APIService.get(`/product/6781/`);
		dispatch(getProductSuccess(productRequest.data));
		return { fulfilled: true, message: 'Product fetched successfully' };
	} catch (error) {
		dispatch(productError(error));
		dispatch(productLoading(false));
	}
};

export const editProduct = (data) => async (dispatch) => {
	dispatch(clearProductErrors());
	dispatch(editProductLoading());
	try {
		const editProductRequest = await APIService.put(`/product/6781`, data);
		dispatch(editProductSuccess(editProductRequest.data));
		return { fulfilled: true, message: 'Product edited successfully' };
	} catch (error) {
		dispatch(editProductError(error));
		dispatch(editProductLoading(false));
	}
};
