import { RootState } from '.';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import api from '../api';

interface ProductState {
	loading: boolean,
  product?: any,
  failed: {
    value: boolean;
    reason?: string;
  },
}

const initialState: ProductState = {
	loading: true,
	failed: {
    value: false,
    reason: ''
  },
  product: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, {payload}) => {
      state.product = payload;
      state.loading = false;
    },
    getProductFailure: (state, {payload}) => {
			state.loading = false;
			state.failed = {
        value: true,
        reason: payload
      }
		},
    updateDesc: (state, {payload}) => {
      state.product.description = payload
    },
    addCategory: (state, {payload}) => {
      state.product.categories.push(payload)
    },
    removeCategory: (state, {payload}) => {
      state.product.categories.splice(payload, 1)
    },
    updateCategory: (state, { payload }) => {
			state.product.categories[payload.index] = payload.value;
		},
    addBusinessModel:(state, {payload}) => {
      state.product.businessModels.push(payload)
    },
    updateBusinessModel(state, { payload }) {
			state.product.businessModels[payload.index] = payload.value;
		},
    removeBusinessModel: (state, {payload}) => {
      state.product.businessModels.splice(payload, 1)
    },
    updateTRL(state, { payload }) {
			state.product.trl = payload;
		},
    updateEntireProduct: (state, {payload}) => {
      state.product = payload      
    }
  }
})

export const {getProduct, getProductFailure, addBusinessModel, addCategory, removeBusinessModel, removeCategory, updateCategory, updateBusinessModel, updateTRL, updateDesc, updateEntireProduct} = productSlice.actions

export const fetchProduct = () => async (dispatch: Dispatch) =>  {
  try {
    const product = await api.getProduct()
    dispatch(getProduct(product))
  } catch (err) {
    console.error(err.message)
    dispatch(getProductFailure(err.message))
  }
}


export const updateProduct = (product: any) => async (dispatch: Dispatch) =>  {
  try {
    await api.updateProduct(product)
    dispatch(updateEntireProduct(product))
  return true
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateDescription = (description: any) => async (dispatch: Dispatch) =>  {
    try {

      dispatch(updateDesc(description))
    } catch (err) {
      console.error(err)
    }
}


export const selectProduct = (state: RootState) => state.product

export default productSlice.reducer;
