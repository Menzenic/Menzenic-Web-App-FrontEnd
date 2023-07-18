import { combineReducers } from 'redux'

import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './categories/categories.reducer'
import { cartReducer } from './cart/cart.reducer'
import { wishlistReducer } from './wishlist/wishlist.reducer'
import { orderhistoryReducer } from './orderhistory/orderhistory.reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    orderhistory: orderhistoryReducer,
})