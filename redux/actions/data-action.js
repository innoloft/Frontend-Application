import {SET_CONFIGURATION, SET_DATA, SET_LOADING, UPDATE_CATEGORY,SET_CONFIG_LOADING} from "../types";
import axios from "axios";


export const getProduct = () => (dispatch) => {
    dispatch({
        type: SET_LOADING
    })

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const promise = Promise.race([
        fetch('https://api-test.innoloft.com/product/6781/', requestOptions)
            .then(response => response.json()),

    ]);

    promise.then((result) =>

        dispatch({
            type:SET_DATA,
            payload: result
        }))
        promise.catch(error => console.log(error));
}

export const getConfig = (config) => (dispatch) =>{
    dispatch({
        type: SET_CONFIG_LOADING
    })
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const promise = Promise.race([
        fetch(`https://api-test.innoloft.com/configuration/${config}/`, requestOptions)
            .then(response => response.json()),

    ]);

    promise.then((result) => {

                dispatch({
                    type: SET_CONFIGURATION,
                    payload: result
                })
        console.log(result)
        }
    )


        promise.catch(error => console.log(error));
}

export const updateCategory = (data) => (dispatch) => {
    dispatch({
        type: SET_LOADING
    })

    const Options = {
        method: 'PUT',
        body:data,
        redirect: 'follow'
    };

    const promise = Promise.race([
        fetch('https://api-test.innoloft.com/product/6781/', Options)
            .then(response => response.json()),

    ]);

    promise.then((result) =>
        dispatch({
            type:UPDATE_CATEGORY,
            payload: result
        }))
        promise.catch(error => console.log(error));
}