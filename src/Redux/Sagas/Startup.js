import { put } from 'redux-saga/effects';

import AccountActions from '../Actions/Account';

const StartupSaga = {
  *startup() {
    yield put(AccountActions.checkConfiguration());
  }
};
export default StartupSaga;
