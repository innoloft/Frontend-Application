import {all} from "redux-saga/effects";
import userSaga from "./data/user/apiCalls";

export default function* rootSaga() {
    yield all([userSaga()]);
}

