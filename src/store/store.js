import {
	compose,
	legacy_createStore as createStore,
	applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

import { IS_DEVELOPMENT } from "../utils/services";

// const loggerMiddleWare = (store) => (next) => (action) => {
//     if(!action.type) return

//     console.log('type:', action.type)
//     console.log('payload:', action.payload)
//     console.log('currentState:', store.getState())

//     next(action)

//     console.log('next state:', store.getState())
// }

const persistConfig = {
	key: "root",
	storage: storage,
	whitelist: ["cart", "categories", "wishlist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [IS_DEVELOPMENT && logger, thunk].filter(Boolean);

const composeEnhancer =
	(IS_DEVELOPMENT && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);
