import axios from 'axios';

export const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const useConfig = (config) => {
	const customConfig = config;
	// add bearer token to every request header
	if (localStorage.innoloftJWTToken) {
		customConfig.headers.Authorization = `Bearer ${localStorage.innoloftJWTToken}`;
	}

	return customConfig;
};

instance.interceptors.request.use(useConfig);


export const APIService = {
	get(endpoint, config = null) {
		return config ? instance.get(endpoint, config) : instance.get(endpoint);
	},

	post(endpoint, data) {
		return instance.post(endpoint, data);
	},

	patch(endpoint, data) {
		return instance.patch(endpoint, data);
	},

	delete(endpoint, data) {
		return instance.delete(endpoint, data);
	},

	put(endpoint, data) {
		return instance.put(endpoint, data);
	},
};
