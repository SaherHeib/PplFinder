import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default Store;
