import { combineReducers } from "redux";
import filterReducer from "./filter/filtReducer";
const rootReducer = combineReducers({
  filt: filterReducer,
});
export default rootReducer;
