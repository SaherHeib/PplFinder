import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filterList = useSelector((state) => state.filt.filterList);

  useEffect(() => {
    fetchUsers();
  }, [filterList]);

  async function fetchUsers() {
    setIsLoading(true);
    let nat = filterList ? "&nat=" + filterList.join(",") : "";
    const response = await axios.get(
      `https://randomuser.me/api/?${nat}&results=15&page=1`
    );
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
