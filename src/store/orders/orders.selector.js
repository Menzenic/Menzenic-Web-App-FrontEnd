import { createSelector } from "reselect";

const selectOrdersReducer = (state) => {
    console.log("state:", state.orders);
    return state.orders;
};

export const selectOrders = createSelector(
    [selectOrdersReducer],
    (ordersSlice) => {
        console.log("ordersSlice::::", ordersSlice.orders);
        return ordersSlice.orders;
    },
);
