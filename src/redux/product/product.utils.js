// import store from '../store';
// import { fetchProductSuccess } from './product.actions';

export const setProductTrl = (product, trl) => {
    const updatedProduct = {
        ...product,
        trl
    }
    updateProduct(updatedProduct);
    return updatedProduct;
}

export const setProductCategories = (product, categories) => {
    const updatedProduct = {
        ...product,
        categories
    }
    updateProduct(updatedProduct);
    return updatedProduct;
}

export const setProductBusinessModels = (product, businessModels) => {
    const updatedProduct = {
        ...product,
        businessModels
    }
    updateProduct(updatedProduct);
    return updatedProduct;
}

export const updateProduct = (product) => {
    fetch('https://api-test.innoloft.com/product/6781/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
        .then(response => response.json())
        .then(data => {
            // WE WILL NOT UPDATE STORE WITH THIS DATA BECAUSE PUT
            // API IS NOT ACTUALLY UPDATING THE PRODUCT
            // store.dispatch(fetchProductSuccess(data));
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}