import { combineReducers } from 'redux'


import ProductReducer from './ProductReducer copy'

const rootReducer = combineReducers({
  product: ProductReducer
})

export default rootReducer


