import { ORDERS_ACTION_TYPES } from "./orders.types";

const ORDERS_INITITAL_STATE = {
    isLoading: false,
    orders: [],
    error: null,
};

export const ordersReducer = (state = ORDERS_INITITAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case ORDERS_ACTION_TYPES.ADD_TO_ORDERS:
            return {
                ...state,
                isLoading: false,
                error: null,
                orders: payload,
            };
        case ORDERS_ACTION_TYPES.FETCH_ORDERS_START:
            return {
                ...state,
                isLoading: true,
            };
        case ORDERS_ACTION_TYPES.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: payload,
                isLoading: false,
            };
        case ORDERS_ACTION_TYPES.FETCH_ORDERS_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        default:
            return state;
    }
};
