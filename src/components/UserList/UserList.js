import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { addFilter, removeFilter, addFavorite, removeFavorite } from "../../redux";
import * as S from "./style";

const UserList = ({ users, isLoading, pageNumber, setPage, hasMore, isFav = false }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [filterFvrt, setfilterFvrt] = useState([]);
  const [filterUsrs, setfilterUsrs] = useState([]);
  const countrieLst = useSelector((state) => state.filt.countrieLst);
  const fvrtUsrs = useSelector((state) => state.fav.fvrtUsrs);
  const dispatch = useDispatch();

  useEffect(() => {
    setfilterUsrs(
      countrieLst.length > 0
        ? users.filter((user) => countrieLst.includes(user.nat))
        : users
    );
  }, [countrieLst, users]);

  useEffect(() => {
    setfilterFvrt(
      countrieLst.length > 0
        ? fvrtUsrs.filter((user) => countrieLst.includes(user.nat))
        : fvrtUsrs
    );
  }, [countrieLst, fvrtUsrs]);

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
    return countrieLst.includes(val) ? true : false;
  };

  const fetchMoreData = () => {
    setPage(pageNumber + 1);
  };
  return (
    <S.UserList>
      <S.Filters>
        <CheckBox
          onChange={handleChecBxChange}
          isChecked={countrieLst.includes("BR")}
          value="BR"
          label="Brazil"
        />
        <CheckBox
          onChange={handleChecBxChange}
          isChecked={countrieLst.includes("AU")}
          value="AU"
          label="Australia"
        />
        <CheckBox
          onChange={handleChecBxChange}
          isChecked={countrieLst.includes("CA")}
          value="CA"
          label="Canada"
        />
        <CheckBox
          onChange={handleChecBxChange}
          isChecked={countrieLst.includes("DE")}
          value="DE"
          label="Germany"
        />
        <CheckBox
          onChange={handleChecBxChange}
          isChecked={countrieLst.includes("FR")}
          value="FR"
          label="France"
        />
      </S.Filters>
      <S.List id="scrollDIV">
        <InfiniteScroll
          dataLength={filterUsrs.length}
          next={() => fetchMoreData()}
          hasMore={hasMore}
          scrollableTarget={"scrollDIV"}
        >
          {(isFav ? filterFvrt : filterUsrs)?.map((user, index) => {
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
        </InfiniteScroll>
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
