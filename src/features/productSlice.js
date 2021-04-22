import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.productData.push(action.payload)
    }
  }
});

export const {
  getProduct
} = productSlice.actions

export const productData = state => state.product.productData;
export default productSlice.reducer