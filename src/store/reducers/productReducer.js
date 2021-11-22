import { CHANGE_FAVORITE_STATUS, GET_PRODUCTS, RESET_ALL_STATUS } from "../types";

const initialState = {
    products: [],
    productsCount: 0,
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            let data = action.payload.data.map((product) => {
                product.isFavorite = false;
                return product;
            });

            return {
                ...state,
                products: data,
                productsCount: action.payload.headers['x-total-count'],
                loading: false
            };

        case CHANGE_FAVORITE_STATUS:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, isFavorite: !product.isFavorite }
                        : product
                )
            };

        case RESET_ALL_STATUS:
            return {
                ...state,
                products: state.products.map((product) => {
                    product.isFavorite = false;
                    return product;
                })
            };

        default: {
            return state;
        }
    }
}