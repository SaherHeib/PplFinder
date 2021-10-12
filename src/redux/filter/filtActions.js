import { ADD_FILTER, REMOVE_FILTER } from "./filtRTypes";

export const addFilter = (countryNat) => {
  return {
    type: ADD_FILTER,
    payload: countryNat,
  };
};

export const removeFilter = (countryNat) => {
  return {
    type: REMOVE_FILTER,
    payload: countryNat,
  };
};
