import API from '../utils/Api';

/**
 * Fetch Product (GET)
 */ 
export const getProduct = () => {
    return API.get(`/product/6781/`);
}
/*--------------*/ 


/**
 * Update Product (PUT)
 */ 
export const updateProduct = () => {
    return API.put(`/product/6781/`);
}
/*--------------*/ 

/**
 * Update Product (PUT)
 */ 
export const getTrl = () => {
    return API.get(`/trl/`);
}
/*--------------*/ 
