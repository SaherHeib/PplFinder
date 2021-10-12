import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter, addFavorite, removeFavorite } from "../../redux";
const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const filterList = useSelector((state) => state.filt.filterList);
  const fvrtUsrs = useSelector((state) => state.fav.fvrtUsrs);
  const dispatch = useDispatch();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleChecBxChange = (eventVal) => {
    if (isCountrieChecked(eventVal)) dispatch(removeFilter(eventVal));
    else dispatch(addFilter(eventVal));
  };
  const handleFavClick = (user) => {
    const useruuid = user.login.uuid;
    if (isFavUsr(useruuid)) dispatch(removeFavorite(user.login.uuid));
    else dispatch(addFavorite(user));
  };
  const isFavUsr = (uuid) => {
    return fvrtUsrs.some((fvUsr) => fvUsr.login.uuid === uuid);
  };
  const isCountrieChecked = (val) => {
    console.log(val);
    return filterList.includes(val) ? true : false;
  };
  return (
    <S.UserList>
      <S.Filters>
        <CheckBox onChange={handleChecBxChange} value="BR" label="Brazil" />
        <CheckBox onChange={handleChecBxChange} value="AU" label="Australia" />
        <CheckBox onChange={handleChecBxChange} value="CA" label="Canada" />
        <CheckBox onChange={handleChecBxChange} value="DE" label="Germany" />
        <CheckBox onChange={handleChecBxChange} value="FR" label="France" />
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                isVisible={index === hoveredUserId || isFavUsr(user.login.uuid)}
              >
                <IconButton onClick={() => handleFavClick(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
