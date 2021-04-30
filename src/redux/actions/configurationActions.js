import * as types from "./actionTypes";
import * as configurationApi from "../../api/configurationApi";

export function getConfigurationSuccess(config) {
	return { type: types.GET_CONFIGURATION, config };
}

export function getConfiguration() {
	return function (dispatch) {
		return configurationApi
			.getConfiguration()
			.then((config) => {
				dispatch(getConfigurationSuccess(config));
			})
			.catch((error) => {
				throw error;
			});
	};
}
