import { createSlice } from '@reduxjs/toolkit';
import mainHttp from '../api/axios';

export const initialState = {
	loading: true,
	hasErrors: false,
	product: null
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		getProduct: (state) => {
			state.loading = true;
		},
		getProductSuccess: (state, { payload }) => {
			state.product = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getProductFailure: (state) => {
			state.loading = false;
			state.hasErrors = true;
		},
		addCategory(state, { payload }) {
			state.product.categories.push(payload);
		},
		updateCategory: (state, { payload }) => {
			state.product.categories[payload.index] = payload.value;
		},
		addBusinessModel(state, { payload }) {
			state.product.businessModels.push(payload);
		},
		updateBusinessModel(state, { payload }) {
			state.product.businessModels[payload.index] = payload.value;
		},
		updateTRL(state, { payload }) {
			state.product.trl = payload;
		}
	}
});

export const {
	getProduct,
	getProductSuccess,
	getProductFailure,
	addCategory,
	updateCategory,
	addBusinessModel,
	updateBusinessModel,
	updateTRL
} = productSlice.actions;

export const fetchProduct = () => async (dispatch) => {
	dispatch(getProduct());
	try {
		const product = await mainHttp.getProduct();
		console.log(product);
		dispatch(getProductSuccess(product));
	} catch (e) {
		console.error(e.message);
		dispatch(getProductFailure());
	}
};

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
