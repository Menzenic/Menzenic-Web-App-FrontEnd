import { ORDERS_ACTION_TYPES } from "./orders.types";

const ORDERS_INITITAL_STATE = {
    orders: [],
};

export const ordersReducer = (state = ORDERS_INITITAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case ORDERS_ACTION_TYPES.ADD_TO_ORDERS:
            return {
                ...state,
                orders: payload,
            };
        case ORDERS_ACTION_TYPES.SET_ORDERS:
            return {
                ...state,
                orders: payload
            };
        default:
            return state;
    }
};
