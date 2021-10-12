import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const fvrtUsrs = useSelector((state) => state.fav.fvrtUsrs);

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={fvrtUsrs} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
