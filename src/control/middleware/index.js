import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import mockData from "./auth.saga"

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
    yield all([
        mockData(),
    ]);
}
