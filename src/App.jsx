import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
    Navigation,
    Auth,
    Home,
    Products,
    AboutUs,
    Profile,
    HealthAssessment,
    ProductDetail,
} from "./routes";
import { Blogs, OrderHistory, PersonalInfo, WishList } from "./components";
import { setCurrentUser } from "./store/user/user.action";
import {
    createUserDocumentFromAuth,
    getCategoriesAndDocument,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCategories } from "./store/categories/categories.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        /**
         * Set the currentUser (if logged in) inside the redux store
         */
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            console.log(user);
            if (user) await createUserDocumentFromAuth(user);
            dispatch(setCurrentUser(user));
        });

        // Set the categoriesMap products list from firebase inside the redux store
        const categoriesMapInit = async () => {
            // await addCollectionAndDocuments('categories', ProductsData)
            const categories = await getCategoriesAndDocument();
            dispatch(setCategories(categories));
        };
        categoriesMapInit();

        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />}>
                    <Route index element={<PersonalInfo />} />
                    <Route path="order-history" element={<OrderHistory />} />
                    <Route path="wishlist" element={<WishList />} />
                </Route>
                <Route
                    path="/product-details/:id"
                    element={<ProductDetail />}
                />
                <Route
                    path="/health-assesment"
                    element={<HealthAssessment />}
                />
                <Route path="/auth" element={<Auth />} />
                <Route path="/blogs" element={<Blogs />} />
            </Route>
        </Routes>
    );
};

export default App;
