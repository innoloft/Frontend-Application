import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'appId',
  initialState: {
    id: {
      id: 1,
      logo: 'https://img.innoloft.de/logo.svg',
      mainColor: '#272e71',
      hasUserSection: true,
    },
  },
  reducers: {
    getAppId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { getAppId } = slice.actions;

export const getAppIdData = (state) => state.appId.id;

export default slice.reducer;
