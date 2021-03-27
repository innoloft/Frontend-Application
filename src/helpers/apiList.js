import dotenv from 'dotenv';
import * as variables from './variables';

dotenv.config();
export const DEFAULT_API = variables.BACKEND_URL;
export const VEIW_TRLS_API = `${variables.BACKEND_URL}/${process.env.REACT_APP_VIEW_TRLS}`;
export const VEIW_PRODUCT_DETAILS_API = `${variables.BACKEND_URL}/${process.env.REACT_APP_VIEW_PRODUCT}`;
export const ADD_EDIT_PRODUCT_DETAILS_API = `${variables.BACKEND_URL}/${process.env.REACT_APP_ADD_EDIT_PRODUCT}`;
