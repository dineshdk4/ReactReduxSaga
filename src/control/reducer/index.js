import { combineReducers } from "redux";

import MockieeData from "../reducer/auth.reducer";
export const rootReducer = combineReducers({
    mockData: MockieeData,
});