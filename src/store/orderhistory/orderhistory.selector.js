import { createSelector } from "reselect"

const selectOrderhistoryReducer = (state) => state.orderhistory

export const selectOrderhistory = createSelector(
    [selectOrderhistoryReducer],
    (orderhistorySlice) => orderhistorySlice.orderhistory
)