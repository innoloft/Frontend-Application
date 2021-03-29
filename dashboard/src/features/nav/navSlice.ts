import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface NavState {
    isOpen: boolean;
}

const initialState: NavState = {
    isOpen: false,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        updateNav: (state, action: PayloadAction<boolean>) => {
            state.isOpen = !action.payload;
        },
    },
});

export const { updateNav } = navSlice.actions;

export const selectNav = (state: RootState) => state.nav.isOpen;

export default navSlice.reducer;
