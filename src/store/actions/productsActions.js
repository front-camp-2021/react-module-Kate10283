import axios from "axios"
import URI from "urijs";
import { CHANGE_FAVORITE_STATUS, GET_PRODUCTS, PRODUCTS_ERROR, RESET_ALL_STATUS } from "../types";

export const getProducts = (data) => async (dispatch, getState) => {
    try {
        // var URI = require('urijs');
        const { page, brand, category, minPrice, maxPrice, minRating, maxRating, search } = data;
        const limit = 9;

        const url = URI("http://localhost:3001/products").query({
            _limit: limit, _page: page, brand, category, price_gte: minPrice, price_lte: maxPrice, 
            rating_gte: minRating, rating_lte: maxRating, q: search
        });

        const res = await axios.get(url);
        dispatch({
            type: GET_PRODUCTS,
            payload: res
        });

    }
    catch (e) {
        dispatch({
            type: PRODUCTS_ERROR,
            payload: console.log(e)
        })
    }
}

export function changeFavoriteStatus(payload) {
    return { type: CHANGE_FAVORITE_STATUS, payload };
}

export function resetAllStatus(payload) {
    return { type: RESET_ALL_STATUS };
}
