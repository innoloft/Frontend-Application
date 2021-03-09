import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL || 'https://api-test.innoloft.com'
});

const getProduct = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await instance.get('/product/6781/');
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const updateProduct = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await instance.put('/product/6781/', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const getTRL = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await instance.get('/trl/');
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const getConfiguration = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const id = process.env.APP_ID || 1;
			const response = await instance.get(`/configuration/${id}`);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const mainHttp = {
	getProduct,
	updateProduct,
	getTRL,
	getConfiguration
};

export default mainHttp;
