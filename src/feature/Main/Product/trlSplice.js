import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const trlUrl = process.env.REACT_APP_API_URL_TRL;

export const getTrl = createAsyncThunk('trl/getTrl', async () => {
    const response = await axios.get(trlUrl);
    return response.data;
})

const trlSplice = createSlice({
    name: 'trl',
    initialState: {
        data: [],
        status: 'idle',
    },
    extraReducers: {
        [getTrl.pending]: (state) => {
            state.status = 'loading';
        },
        [getTrl.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [getTrl.rejected]: (state) => {
            state.status = 'error';
        },
    }
})

export default trlSplice.reducer;