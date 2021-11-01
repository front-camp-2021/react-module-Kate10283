import axios from "axios";
import { CHANGE_FAVORITE_STATUS, RESET_ALL_STATUS } from "../actions/actions";

const initialState = () => {
    axios.get("http://localhost:3001/products")
        .then(res => {
            console.log(res);
            return res.data;
        })
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FAVORITE_STATUS: {
            return state;
        }
        case RESET_ALL_STATUS: {
            return state;
        }
        default: {
            return state;
        }
    }
}