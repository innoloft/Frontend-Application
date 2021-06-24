import { combineReducers } from 'redux';
import forms from './forms';
import application from './application';
import notifications from './notifications';
import testReducer from './testReducer'

export default combineReducers({
  testReducer, forms, notifications, application
});