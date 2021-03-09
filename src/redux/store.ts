import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import trlReducer from './trlSlice'
const store =  configureStore({
    reducer: {
      product: productReducer,
      trl: trlReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store