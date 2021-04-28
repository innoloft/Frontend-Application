import { put, call } from 'redux-saga/effects';
import get from 'lodash/get';

import ProductActions from '../Actions/Product';
import Api from '../../Services/Api';


const ProductSaga = {
    *getOne() {
        const res = yield call(Api.product.getOne, {}, { headers: {} }); // pass custom headers 
        if (res.ok) {
            const product = get(res, "data", {});
            yield put(ProductActions.requestSucceeded(product));
        } else {
            yield put(ProductActions.requestFailed("some error"));
        }
    },
    *getTrl() {
        const res = yield call(Api.product.getTrl, {}, { headers: {} }); // pass custom headers 
        if (res.ok) {
            const product = get(res, "data", {});
            yield put(ProductActions.trlRequestSucceeded(product));
        } else {
            yield put(ProductActions.requestFailed("some error"));
        }
    },
    *put(data) {
        const res = yield call(Api.product.getOne, data, { headers: {} }); // pass custom headers 
        if (res.ok) {
            const product = get(res, "data", {});
            yield put(ProductActions.requestSucceeded(product));
        } else {
            yield put(ProductActions.requestFailed("some error"));
        }
    }
};

export default ProductSaga;
