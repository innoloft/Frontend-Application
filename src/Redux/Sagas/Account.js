import { put, call } from 'redux-saga/effects';
import get from 'lodash/get';

import AccountActions from '../Actions/Account';
import Api from '../../Services/Api';
import AppID from '../../Configs/AppID';

const AccountSaga = {
  *checkStatus() {
    const res = yield call(Api.general.configuration, { AppID }, { headers: {} }); // pass custom headers 

    if (res.ok) {
      const configuration = get(res, "data", {});
      yield put(AccountActions.requestSucceeded(configuration));
    } else {
      yield put(AccountActions.requestFailed({}));
    }

  },
  *logout() {
    yield put(AccountActions.reset());
  }
};

export default AccountSaga;
