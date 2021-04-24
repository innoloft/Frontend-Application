import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const configUrl = process.env.REACT_APP_API_URL_CONFIG;

export const getConfig = createAsyncThunk('trl/getConfig', async () => {
    const response = await axios.get(configUrl);
    return response.data;
})

const trlSplice = createSlice({
    name: 'config',
    initialState: {
        data: {},
        status: 'idle',
    },
    extraReducers: {
        [getConfig.pending]: (state) => {
            state.status = 'loading';
        },
        [getConfig.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [getConfig.rejected]: (state) => {
            state.data = {
                id: 1,
                logo: 'https://img.innoloft.de/logo.svg',
                mainColor: '#272e71',
                hasUserSection: true
            };
            state.status = 'error';
        },
    }
})

export default trlSplice.reducer;