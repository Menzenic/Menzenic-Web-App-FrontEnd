import { ORDER_HISTORY_ACTION_TYPES } from "./orderhistory.types"

const ORDER_HISTORY_INITITAL_STATE = {
    isLoading: false,
    orderhistory: [],
    error: null,
}

export const orderhistoryReducer = (state = ORDER_HISTORY_INITITAL_STATE, action = {}) => {
    const { type, payload } = action

    switch(type) {
        case ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_START:
            return {
                ...state,
                isLoading: true,
            }
        case ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_SUCCESS:
            return {
                ...state,
                orderhistory: payload,
                isLoading: false,
            }
        case ORDER_HISTORY_ACTION_TYPES.FETCH_ORDER_HISTORY_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            }
        default: 
            return state
    }
}