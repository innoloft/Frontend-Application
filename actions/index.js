import axios from "axios";
function fetchProducts() {
    return async dispatch => {
        try {
            const product = await axios.get(`https://api-test.innoloft.com/product/6781/`).then(res => {
                return res.data;
            });

            dispatch({
                type: "FETCH_PRODUCT",
                payload: product
            });
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: "FETCH_PRODUCT_ERROR",
                payload: error.message
            })
        }
    }
}


//Fetching the list of TRL's
const fetchListOfTrl = () => {
    return async dispatch => {
        try {
            dispatch({
                type: "IS_LOADING",
                payload: true
            })
            const TRLList = await axios.get("https://api-test.innoloft.com/trl/").then(res => {
                return res.data;
            });

            dispatch({
                type: "IS_LOADING",
                payload: false
            })

            dispatch({
                type: "FETCH_TRL_LIST",
                payload: TRLList
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: "FETCH_TRL_ERROR",
                payload: "error fetching trl list"
            })
        }
    }
}


export { fetchProducts, fetchListOfTrl }