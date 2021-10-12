import { ADD_FAVORITE_USR, REMOVE_FAVORITE_USR } from "./favoriteTypes";
const initialState = {
  fvrtUsrs: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_USR:
      return {
        fvrtUsrs: [...state.fvrtUsrs, action.payload],
      };
    case REMOVE_FAVORITE_USR:
      return {
        fvrtUsrs: state.fvrtUsrs.filter((e) => e.login.uuid !== action.payload),
      };
    default:
      return state;
  }
};
export default favoriteReducer;
