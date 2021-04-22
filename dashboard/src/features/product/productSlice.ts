import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProduct, productUpdate } from '../../api/product';
import { RootState } from '../../app/store';
import { Product } from '../../types/Product';

interface ProductState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    data: any //TODO: get product type
    error: any | null,
}

const initialState: ProductState = {
    status: 'idle',
    data: {},
    error: null
};

type FetchProductError = {
    message: string;
}


export const fetchProduct = createAsyncThunk<
    Product, 
    number, 
    {rejectValue: FetchProductError}
    >(
    'product/fetchProduct', 
    async (productId: number, thunkApi) => {
    const response = await getProduct(productId)
    if (response.status !== 200) {
      // Return the error message:
        return thunkApi.rejectWithValue({ 
            message: "Failed to fetch product." 
        });
    }
    return response.data
})


export const updateProduct = createAsyncThunk<
    Product, 
    {productId: number, payload: Product},
    {rejectValue: FetchProductError}
    >(
    'product/updateProduct', 
    async (data: any, thunkApi) => {
    const response = await productUpdate(data.productId, data.payload)
    if (response.status !== 200) {
      // Return the error message:
        return thunkApi.rejectWithValue({ 
            message: "Failed to fetch product." 
        });
    }
    return response.data
})



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(fetchProduct.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.status = "succeeded";
        })
        .addCase(fetchProduct.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "failed";
        })
        .addCase(updateProduct.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(updateProduct.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.status = "succeeded";
        })
        .addCase(updateProduct.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "failed";
        });
    }
});

export const selectProduct = (state: RootState) => state.product.data;

export default productSlice.reducer;
