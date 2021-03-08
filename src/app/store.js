import { configureStore } from '@reduxjs/toolkit';
import userInfo from './Reducer';

export default configureStore({
  reducer: {
    userInfo: userInfo,
  },
});
