import { ADD_FILTER, REMOVE_FILTER } from "./filtRTypes";
const initialState = {
  filterList: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      console.log(action.payload);
      return {
        filterList: [...state.filterList, action.payload],
      };
    case REMOVE_FILTER:
      return {
        filterList: state.filterList.filter((e) => e !== action.payload),
      };
    default:
      return state;
  }
};
export default filterReducer;
