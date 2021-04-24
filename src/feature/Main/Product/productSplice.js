import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productUrl = process.env.REACT_APP_API_URL_PRODUCT;

export const getProduct = createAsyncThunk('product/fetchProduct', async () => {
    console.log(productUrl);
    const response = await axios.get(productUrl);
    return response.data;
})

export const updateProduct = createAsyncThunk('product/updateProduct', async (updatedProduct) => {
    const response = await axios.put(productUrl, updatedProduct);
    return response.data;
})

const productSplice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: 'idle',
    },
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.status = 'loading';
        },
        [getProduct.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [getProduct.rejected]: (state) => {
            state.status = 'error';
        }
    }
})

export default productSplice.reducer;