import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

export function getTrlSuccess(trl) {
	return { type: types.GET_TRL, trl };
}

export function addTrlSuccess(newTrl) {
	return { type: types.ADD_TRL, newTrl };
}

export function getTrl() {
	return function (dispatch) {
		return productApi
			.getTrl()
			.then((trl) => {
				dispatch(getTrlSuccess(trl));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export function addTrl(newTrl) {
	return (dispatch) => dispatch(addTrlSuccess(newTrl));
}
