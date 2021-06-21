import { combineReducers } from 'redux'
import { productReducer } from './product'
import { trlReducer } from './trl'
import { navReducer } from './nav'

const reducers = combineReducers({
	product: productReducer,
	trl: trlReducer,
	nav: navReducer,
})

export default reducers
