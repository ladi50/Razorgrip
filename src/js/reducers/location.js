import uuid from "react-uuid";
import {
    ADD_LOCATION,
    REMOVE_LOCATION,
    EDIT_LOCATION,
    GET_LOCATION,
    SORT_LOCATIONS,
    SHOW_LOCATIONS, SORT_LOCATIONS_BY_CATEGORY
} from "../constants/action-types";

const initialState = {
    locations: [],
    location: null,
    filteredLocations: null
};

function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOCATIONS:
            return {
                ...state,
                filteredLocations: [...state.locations]
            };
        case GET_LOCATION:
            return {
                ...state,
                location: state.locations.find(item => item.id === action.payload)
            };
        case ADD_LOCATION:
            const newLocations = [...state.locations];
            newLocations.push({ ...action.payload, id: uuid() });

            return {
                ...state,
                locations: newLocations
            };
        case EDIT_LOCATION:
            const newLocation = { ...action.payload, id: uuid() };
            const locationIndex = state.locations.findIndex(item => item.id === action.payload.id);
            let editedLocation = [...state.locations];
            editedLocation.splice(locationIndex, 1, newLocation);

            return {
                ...state,
                locations: editedLocation,
                location: null
            };
        case REMOVE_LOCATION:
            return {
                ...state,
                locations: state.locations.filter(item => item.id !== action.payload)
            };
        case SORT_LOCATIONS:
            const sortedLocations = [...state.locations];
            sortedLocations.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                return 0;
            });

            return {
                ...state,
                filteredLocations: sortedLocations
            };
        case SORT_LOCATIONS_BY_CATEGORY:
            let categorizedLocations = [...state.locations];
            categorizedLocations = categorizedLocations.filter(item => item.category === action.payload);

            return {
                ...state,
                filteredLocations: categorizedLocations
            };
        default:
            return state;
    }

}

export default locationsReducer;