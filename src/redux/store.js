import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export const persist_Store = persistStore(store);
export default { store, persist_Store };
