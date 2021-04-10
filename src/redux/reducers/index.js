/** @format */

import { combineReducers } from 'redux';
import { productReducer } from './product/product.reducer';
import { trlReducer } from './trl/trl.reducer';
import { configReducer } from '../reducers/config/config.reducer';

const rootReducer = combineReducers({
	product: productReducer,
	trl: trlReducer,
	config: configReducer
});

export default rootReducer;
