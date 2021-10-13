import { React, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import { useSelector } from "react-redux";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, pageNumber, hasMore, setPage, fetchUsers } = usePeopleFetch();
  const countrieLst = useSelector((state) => state.filt.countrieLst);

  useEffect(() => {
    fetchUsers(true);
  }, [countrieLst]);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          users={users}
          isLoading={isLoading}
          pageNumber={pageNumber}
          setPage={setPage}
          hasMore={hasMore}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
