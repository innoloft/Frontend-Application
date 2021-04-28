import { takeEvery, takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from '../Actions/Startup';
import { AccountTypes } from '../Actions/Account';
import { ProductTypes } from '../Actions/Product';

/* ------------- Sagas ------------- */

import startupSagas from './Startup';
import accountSagas from './Account';
import productSagas from './Product';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startupSagas.startup),

    takeLatest(AccountTypes.CHECK_CONFIGURATION, accountSagas.checkStatus),

    takeLatest(ProductTypes.GET_ONE, productSagas.getOne),
    takeLatest(ProductTypes.GET_TRL, productSagas.getTrl),
    takeLatest(ProductTypes.PUT, productSagas.put),
  ]);
}
