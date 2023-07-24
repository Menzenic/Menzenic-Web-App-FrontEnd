import { createSelector } from "reselect";

const selectOrdersReducer = (state) => state.orders;

export const selectOrders = createSelector(
    [selectOrdersReducer],
    (ordersSlice) => {
        console.log("ordersSlice:", ordersSlice);
        return ordersSlice.orders;
    },
);
