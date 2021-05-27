import {takeEvery,all,put} from "redux-saga/effects";
import * as types from "./actionTypes";

export default function* AuthSaga() {
    yield all([
        yield takeEvery(
            types.ACTION_DATA_User_UpdateMainInfo,
            updateMainInfoAsync
        ),
        yield takeEvery(
            types.ACTION_DATA_User_UpdateAdditionalInfo,
            updateAdditionalInfoAsync
        ),
    ]);
}


function* updateMainInfoAsync(params) {

    try {
            //call dummy api
        yield put({
            type:types.ACTION_DATA_User_UpdateMainInfo_Success,
            data:params.data
        });

    } catch (error) {
        // dispatch a failure action to the store with the error
    }
}
function* updateAdditionalInfoAsync(params) {

    try {
            //call dummy api
        yield put({
            type:types.ACTION_DATA_User_UpdateAdditionalInfo_Success,
            data:params.data
        });

    } catch (error) {
        // dispatch a failure action to the store with the error
    }
}
