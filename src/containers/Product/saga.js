import { takeLatest, call, put } from "redux-saga/effects";
import request from "utils/request";
import { setAllInfo } from "./action";
import { GET_ALL_INFO } from "./constants";

export function* requestAllInfo() {
  try {
    const requestURL = `https://api-test.innoloft.com/product/6781/`;
    const response = yield call(request, {
      method: "GET",
      url: requestURL,
    });
    yield put(setAllInfo(response));
  } catch (err) {
    console.error(err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_ALL_INFO, requestAllInfo);
}
