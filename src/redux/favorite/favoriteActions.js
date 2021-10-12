import { ADD_FAVORITE_USR, REMOVE_FAVORITE_USR } from "./favoriteTypes";

export const addFavorite = (favUsr) => {
  return {
    type: ADD_FAVORITE_USR,
    payload: favUsr,
  };
};

export const removeFavorite = (favUsruuid) => {
  return {
    type: REMOVE_FAVORITE_USR,
    payload: favUsruuid,
  };
};
