import { combineReducers } from 'redux';
import productReducer from './productSlice';

const rootReducer = combineReducers({
	product: productReducer
});

export default rootReducer;
