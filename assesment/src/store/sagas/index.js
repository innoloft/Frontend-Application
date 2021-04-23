import { all } from 'redux-saga/effects';
import productSaga from "./ProductSaga";

const sagas = function* (){
    yield all([productSaga()])
}

export default sagas

