import api from "./api"

export const getProduct = async () => {
  return await api.get('/product/6781/'); 
}

export const getTrl = async () => {
    return await api.get('/trl'); 
  }