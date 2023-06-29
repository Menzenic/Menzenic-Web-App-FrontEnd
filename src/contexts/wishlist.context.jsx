import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
    addToWishlist,
    removeItemFromWishlist,
    getWishList,
} from "../utils/firebase/firebase.utils";
import { UserContext } from "./user.context";

export const WishListContext = createContext({
    wishList: [],
    addItemToWishList: () => null,
    removeItemFromWishList: () => null,
    checkItem: false,
});

export const WishListProvider = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    const [wishList, setWishList] = useState([]);

    const user = useMemo(() => {
        return currentUser?.uid;
    }, [currentUser]);

    const addItemToWishList = async (productId) => {
        const val = await addToWishlist(productId);
        setWishList(val);
    };

    const removeItemFromWishList = async (productId) => {
        await removeItemFromWishlist(productId);
        setWishList((prevWishList) =>
            prevWishList.filter((product) => product.id !== productId)
        );
    };

    const checkItem = (productId) => {
        let bool = false;
        if (wishList?.length > 0) {
            wishList?.forEach((wish) => {
                if (wish.id === productId) bool = true;
            });
        }
        return bool;
    };

    useEffect(() => {
        (async function get() {
            const res = await getWishList(user);
            setWishList(res);
        })();
    }, [user]);

    const value = {
        wishList,
        addItemToWishList,
        removeItemFromWishList,
        checkItem,
    };

    return (
        <WishListContext.Provider value={value}>
            {children}
        </WishListContext.Provider>
    );
};
