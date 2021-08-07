import uuid from "react-uuid";
import { ADD_CATEGORY, EDIT_CATEGORY, GET_CATEGORY, REMOVE_CATEGORY } from "../constants/action-types";

const initialState = {
    categories: [],
    category: null
};

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: state.categories.find(item => item.id === action.payload)
            };
        case ADD_CATEGORY:
            const newCategories = [...state.categories];
            newCategories.push({ ...action.payload, id: uuid() });

            return {
                ...state,
                categories: newCategories
            };
        case EDIT_CATEGORY:
            const newCategory = { ...action.payload, id: uuid() };
            const categoryIndex = state.categories.findIndex(item => item.id === action.payload.id);
            let editedCategories = [...state.categories];
            editedCategories.splice(categoryIndex, 1, newCategory);

            return {
                ...state,
                categories: editedCategories
            }
        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }

}

export default categoriesReducer;