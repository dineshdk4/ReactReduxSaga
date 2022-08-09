import { createStore, applyMiddleware } from "redux";
import { rootReducer } from '../reducer';
import rootSaga, { sagaMiddleware } from "../middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancerList = [];
const devToolsExtension =
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

if (typeof devToolsExtension === "function") {
    enhancerList.push(devToolsExtension());
}

const composedEnhancer = composeWithDevTools({});


const passRootReducer = (state, action) => {
    return rootReducer(state, action);
};

const store = createStore(passRootReducer, composedEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;