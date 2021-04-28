import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions(
  {
    getOne: null,
    getTrl: null,
    put: null,

    requestSucceeded: ['data'],
    trlRequestSucceeded: ['data'],
    requestFailed: ['data'],

    logout: null,
    reset: null,
  },
  {
    prefix: 'Product/'
  }
);

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: false,
  errors: null,
  product: null,
  trl: null,
});

/* ------------- Reducers ------------- */

export const getOne = state => state.merge({ loading: true });

export const getTrl = state => state.merge({ loading: true });

export const put = state => state.merge({ loading: true });

export const requestSucceeded = (state, { data }) => state.merge({
  loading: false,
  product: data,
});

export const trlRequestSucceeded = (state, { data }) => state.merge({
  loading: false,
  trl: data,
});


export const requestFailed = (state, { errors }) => state.merge({
  loading: false,
  errors,
});

export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ONE]: getOne,
  [Types.GET_TRL]: getTrl,
  [Types.PUT]: put,

  [Types.REQUEST_SUCCEEDED]: requestSucceeded,
  [Types.TRL_REQUEST_SUCCEEDED]: trlRequestSucceeded,
  [Types.REQUEST_SUCCEEDED]: requestSucceeded,
  [Types.REQUEST_FAILED]: requestFailed,

  [Types.RESET]: reset,
});
