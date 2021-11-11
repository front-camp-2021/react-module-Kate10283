import axios from "axios"
import { CHANGE_FAVORITE_STATUS, GET_PRODUCTS, PRODUCTS_ERROR, RESET_ALL_STATUS } from "../types";

export async function getProducts(dispatch) {
    try {
        const res = await axios.get('http://localhost:3001/products?_limit=9&_page=1&brand=asus&price_gte=0&price_lte=5000&q=&rating_gte=0&rating_lte=5');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
        
    }
    catch(e) {
        dispatch({
            type: PRODUCTS_ERROR,
            payload: console.log(e)
        })
    }
}

export function changeFavoriteStatus(payload) {
    return {type: CHANGE_FAVORITE_STATUS, payload};
}

export function resetAllStatus(payload) {
    return {type: RESET_ALL_STATUS};
}
