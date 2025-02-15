import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const [pageNumber, setPage] = useState(1);
  const countrieLst = useSelector((state) => state.filt.countrieLst);

  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  async function fetchUsers(filter) {
    setIsLoading(true);
    let nat = countrieLst ? "&nat=" + countrieLst.join(",") : "";
    const response = await axios.get(
      `https://randomuser.me/api/?${nat}&results=15&page=${pageNumber}`
    );

    setIsLoading(false);
    setUsers(filter ? [...response.data.results] : [...users, ...response.data.results]);
    sethasMore(response.data.results.length > 0);
  }

  return { users, isLoading, pageNumber, hasMore, setPage, fetchUsers };
};
