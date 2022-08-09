import { createAction } from "@reduxjs/toolkit";

export const FetchMockData = createAction("FETCH_MOCK_DATA", (payload) => ({ payload }));
export const FetchMockDataSuccess = createAction("FETCH_MOCK_DATA_SUCCESS", (payload) => ({ payload }));
export const FetchMockDataFailure = createAction("FETCH_MOCK_DATA_FAILURE");