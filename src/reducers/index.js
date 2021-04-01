import { combineReducers } from 'redux'
import productReducer from './productReducer'
import trlReducer from './trlReducer'

export default combineReducers({
   product: productReducer,
   trl: trlReducer
})