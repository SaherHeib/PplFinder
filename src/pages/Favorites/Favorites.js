import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { useSelector } from "react-redux";

const Favorites = () => {
  const fvrtUsrs = useSelector((state) => state.fav.fvrtUsrs);
  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={fvrtUsrs} isFav={true} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
