import {
    addToOrderHistory,
    getOrders,
} from "../../utils/firebase/firebase.utils";
import { ORDERS_ACTION_TYPES } from "./orders.types";

const addOrderItem = (orders = [], product) => {
    console.log("orders:", orders);

    const newHelp = orders.push(product);
    console.log("newHelp:", newHelp);
    return orders;
};

export const addItemToOrders = (orders, product) => {
    const newOrders = addOrderItem(orders, product);
    return {
        type: ORDERS_ACTION_TYPES.ADD_TO_ORDERS,
        payload: newOrders,
    };
};
