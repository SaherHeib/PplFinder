import { combineReducers } from "redux";
import filterReducer from "./filter/filtReducer";
import favoriteReducer from "./favorite/favoriteReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["fav"],
};
const rootReducer = combineReducers({
  filt: filterReducer,
  fav: favoriteReducer,
});
export default persistReducer(persisConfig, rootReducer);
