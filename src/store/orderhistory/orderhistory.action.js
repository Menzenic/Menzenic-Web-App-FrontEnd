import { addItemToOrderHistory, getOrderhistory } from "../../utils/firebase/firebase.utils"
import { ORDER_HISTORY_ACTION_TYPES } from "./orderhistory.types"

export const fetchOrderhistoryStart = () => ({
    type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START,
})
export const fetchOrderhistorySuccess = (orderhistoryArray) => ({
    type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_SUCCESS,
    payload: orderhistoryArray,
})
export const fetchOrderhistoryFailed = (error) => ({
    type: ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_FAILED,
    payload: error
})

export const fetchOrderhistoryAsync = () => async (dispatch) => {
    dispatch(fetchOrderhistoryStart())
    try {
        const orderhistoryArray = await getOrderhistory()
        dispatch(fetchOrderhistorySuccess(orderhistoryArray))
    } catch (err) {
        dispatch(fetchOrderhistoryFailed(err))
    }
}