import { configureStore } from '@reduxjs/toolkit';
import configReducer from './feature/Main/configSplice'
import productReducer from './feature/Main/Product/productSplice';
import trlReducer from './feature/Main/Product/trlSplice';

export default configureStore({
  reducer: {
    config: configReducer,
    product: productReducer,
    trl: trlReducer,
  },
})