import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions(
  {
    checkConfiguration: null,

    requestSucceeded: ['data'],
    requestFailed: ['data'],

    logout: null,
    reset: null,
  },
  {
    prefix: 'Account/'
  }
);

export const AccountTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  errors: null,
  configuration: null,
});

/* ------------- Reducers ------------- */

export const checkConfiguration = state => state.merge({ loading: true });

export const requestSucceeded = (state, { data }) => state.merge({
  loading: false,
  configuration: data,
});

export const requestFailed = (state, { errors }) => state.merge({
  loading: false,
  errors,
});

export const logout = () => { };

export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_CONFIGURATION]: checkConfiguration,

  [Types.REQUEST_SUCCEEDED]: requestSucceeded,
  [Types.REQUEST_FAILED]: requestFailed,

  [Types.LOGOUT]: logout,
  [Types.RESET]: reset,
});
