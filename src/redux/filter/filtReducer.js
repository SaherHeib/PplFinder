import { ADD_FILTER, REMOVE_FILTER } from "./filtRTypes";
const initialState = {
  countrieLst: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        countrieLst: [...state.countrieLst, action.payload],
      };
    case REMOVE_FILTER:
      return {
        countrieLst: state.countrieLst.filter((e) => e !== action.payload),
      };
    default:
      return state;
  }
};
export default filterReducer;
