import { combineReducers } from "redux";
import categories from "./category";
import locations from "./location";

const rootReducer = combineReducers({ categories, locations })

export default rootReducer;