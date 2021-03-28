import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import tlrSlice from './tlrSlice';
import configuration from './configuration';

export const store = configureStore({
	reducer: {
    product: productSlice,
    tlr: tlrSlice,
    configuration
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
