import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-test.innoloft.com'
})

const getProduct = async() => {
  try {
    const {data} = await instance.get('/product/6781/')
    return data
  } catch (err) { 
    throw new Error(err)
  }
}

const getTlr = async() => {
  try {
    const {data} = await instance.get('/trl/')
    return data
  } catch (err) { 
    throw new Error(err)
  }
}

const updateProduct = async (data: any) => {
		try {
			const response = await instance.put('/product/6781/', data);
			return response.data;
		} catch (error) {
			throw new Error(error);
		}
};

const getConfiguration = async () => {
  const APP_ID = process.env.REACT_APP_APP_ID ?? 1
  try {
    const response = await instance.get(`/configuration/${APP_ID}/`)
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};



const api = {
  getProduct,
  getTlr,
  updateProduct,
  getConfiguration
}

export default api