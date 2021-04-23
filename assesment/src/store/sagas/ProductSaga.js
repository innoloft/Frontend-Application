import { all, takeLeading, call, put } from "redux-saga/effects";
import { getProduct, getTrl } from "../../services/Product.api";
import { GET_POSTS, GET_TRL } from "../actions/Product.actions";

function* getProductSaga() {
  const data = yield call(getProduct);
  yield put({ type: GET_POSTS, payload: data.data });
}

function* getProductsWatcher() {
  yield takeLeading(GET_POSTS, getProductSaga);
}

function* getTrlSaga() {
  const data = yield call(getTrl);
  yield put({ type: GET_TRL, payload: data.data });
}

function* getTrlWatcher() {
  yield takeLeading(GET_TRL, getTrlSaga);
}

export default function* productSagas() {
  yield all([getProductsWatcher(), getTrlWatcher()]);
}
