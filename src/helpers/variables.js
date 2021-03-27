import dotenv from 'dotenv';

dotenv.config();
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const ERROR_TIMEOUT = process.env.REACT_APP_ERROR_TIMEOUT;
export const SUCCESS_TIMEOUT = process.env.REACT_APP_SUCCESS_TIMEOUT;
