import {
    ADD_LOCATION,
    EDIT_LOCATION,
    REMOVE_LOCATION,
    GET_LOCATION,
    SORT_LOCATIONS,
    SORT_LOCATIONS_BY_CATEGORY, SHOW_LOCATIONS
} from "../constants/action-types";

export function getLocation(data) {
    return { type: GET_LOCATION, payload: data };
}

export function showLocations() {
    return { type: SHOW_LOCATIONS };
}

export function addLocation(data) {
    return { type: ADD_LOCATION, payload: data };
}

export function editLocation(data) {
    return { type: EDIT_LOCATION, payload: data };
}

export function removeLocation(data) {
    return { type: REMOVE_LOCATION, payload: data };
}

export function sortLocations() {
    return { type: SORT_LOCATIONS };
}

export function sortLocationsByCategory(payload) {
    return { type: SORT_LOCATIONS_BY_CATEGORY, payload };
}