import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTrlList } from '../../api/trl';
import { RootState } from '../../app/store';
import { Trl } from '../../types/Trl';

interface TrlState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    data: Trl[] //TODO: get product type
    error: any | null,
}

const initialState: TrlState = {
    status: 'idle',
    data: [],
    error: null
};

type FetchTrlError = {
    message: string;
}


export const fetchTrlList = createAsyncThunk<
    Trl[],
    undefined,
    {rejectValue: FetchTrlError}>(
    'product/fetchTrl', 
    async (_, thunkApi) => {
    const response = await getTrlList()
    if (response.status !== 200) {
      // Return the error message:
        return thunkApi.rejectWithValue({ 
            message: "Failed to fetch product." 
        });
    }
    return response.data
})


export const trlSlice = createSlice({
    name: 'trl',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTrlList.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchTrlList.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.status = "succeeded";
        });
        builder.addCase(fetchTrlList.rejected, (state, {payload}) => {
            if (payload) {
                state.error = payload.message;
            }
            state.status = "failed";
        });
    }
});


export const selectTrl = (state: RootState) => state.trl.data;

export default trlSlice.reducer;
