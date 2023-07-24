import {
    addToOrderHistory,
    getOrders,
} from "../../utils/firebase/firebase.utils";
import { ORDERS_ACTION_TYPES } from "./orders.types";

const addOrderItem = (orders = [], product) => {
    console.log('orders:', orders)
    const newHelp = orders.push(product)
    console.log('newHelp:', newHelp)
    return orders
};

export const fetchOrdersStart = () => ({
    type: ORDERS_ACTION_TYPES.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = (ordersArray) => ({
    type: ORDERS_ACTION_TYPES.FETCH_ORDERS_SUCCESS,
    payload: ordersArray,
});
export const fetchOrdersFailed = (error) => ({
    type: ORDERS_ACTION_TYPES.FETCH_ORDERS_FAILED,
    payload: error,
});

export const fetchOrdersAsync = () => async (dispatch) => {
    dispatch(fetchOrdersStart());
    try {
        const ordersArray = await getOrders();
        dispatch(fetchOrdersSuccess(ordersArray));
    } catch (err) {
        dispatch(fetchOrdersFailed(err));
    }
};

export const addItemToOrders = (orders, product) => {
    const newOrders = addOrderItem(orders, product);
    return {
        type: ORDERS_ACTION_TYPES.ADD_TO_ORDERS,
        payload: newOrders,
    };
};
