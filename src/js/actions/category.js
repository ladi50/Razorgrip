import { ADD_CATEGORY, EDIT_CATEGORY, GET_CATEGORY, REMOVE_CATEGORY } from "../constants/action-types";

export function getCategory(payload) {
    return { type: GET_CATEGORY, payload }
}

export function addCategory(payload) {
    return { type: ADD_CATEGORY, payload }
}

export function editCategory(payload) {
    return { type: EDIT_CATEGORY, payload }
}

export function removeCategory(payload) {
    return { type: REMOVE_CATEGORY, payload }
}