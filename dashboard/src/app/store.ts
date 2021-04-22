import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import trlReducer from '../features/product/trlSlice';
import navReducer from '../features/nav/navSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    trl: trlReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
