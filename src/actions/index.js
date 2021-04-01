import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const fetchProducts = () => async dispatch => {
   const response = await axios.get('https://api-test.innoloft.com/product/6781')
   dispatch({ type: 'FETCH_PRODUCT', payload: response });
}

export const addAttribute = (item, objectKey) => async (dispatch, getState) => {
   const randomId = uuidv4();
   const store = getState().product.data;
   const data = objectKey === 'categories' ? store.categories : store.businessModels;

   const response = await axios.put('https://api-test.innoloft.com/product/6781',
      {
         ...store,
         [objectKey]: [...data, {
            id: randomId,
            name: item
         }]
      });
   dispatch({ type: 'ADD_ATTRIBUTE', payload: response });
}

export const fetchTRL = () => async dispatch => {
   const response = await axios.get('http://localhost:8080/https://api-test.innoloft.com/trl')
   dispatch({ type: 'FETCH_TRL', payload: response });
}


