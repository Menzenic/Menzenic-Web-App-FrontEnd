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
	Faqs,
	Ingredients,
	PaymentMethods,
	RefundsReturns,
	TermsConditions,
	PrivacyPolicy,
} from "./routes";
import { Blogs, Orders, PersonalInfo, WishList } from "./components";
import { setCurrentUser } from "./store/user/user.action";
import { setCategories } from "./store/categories/categories.action";

import {
	createUserDocumentFromAuth,
	getCategoriesAndDocument,
	onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

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
				<Route path="/product" element={<Products />} />
				<Route path="/profile" element={<Profile />}>
					<Route index element={<PersonalInfo />} />
					<Route path="orders" element={<Orders />} />
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
				<Route path="/faqs" element={<Faqs />} />
				<Route path="/our-ingredients" element={<Ingredients />} />
				<Route path="/payment-methods" element={<PaymentMethods />} />
				<Route path="/refund-return" element={<RefundsReturns />} />
				<Route path="/terms-conditions" element={<TermsConditions />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Route>
		</Routes>
	);
};

export default App;
