import axios from "axios";
import { BASE_URL } from "../../config";



export const getProduct = () => dispatch => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/product/6781/`, {
        "headers": {
            "Content-Type": "application/json",
        }
    })
        .then((res) => {
            dispatch({
                type: 'ALL_PRODUCT',
                payload: res.data
            })
            return res.data
        })
        .catch(() => {
            return false
        })
}

export const getTRL = () => dispatch => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/trl/`, {
        "headers": {
            "Content-Type": "application/json",
        }
    })
        .then((res) => {
            dispatch({
                type: 'TRL_PRODUCT',
                payload: res.data
            })
            return res.data
        })
        .catch(() => {
            return false
        })
}