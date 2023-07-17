import { CATEGORIES_TYPES } from "./categories.types";

export const setCategories = (categories) => ({
    type: CATEGORIES_TYPES.SET_CATEGORIES,
    payload: categories,
});
