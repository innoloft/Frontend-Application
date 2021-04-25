import { combineReducers } from 'redux';

import menuReducer from './menu/menu.reducer';
import productReducer from './product/product.reducer';
import configReducer from './config/config.reducer';


const rootReducer = combineReducers({
    menu: menuReducer,
    product: productReducer,
    config: configReducer
});

export default rootReducer;