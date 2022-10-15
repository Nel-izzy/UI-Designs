import React, { useState, useEffect } from "react";
import Dashboard from "../dashboard/Dashboard";
import FilterForm from "../FilterForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState(() => {
  //   const existingUsers = localStorage.getItem("users");

  //   if (existingUsers) {
  //     return JSON.parse(existingUsers);
  //   } else {
  //     return [];
  //   }
  // });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // localStorage.setItem("users", JSON.stringify(users));
    fetchUsers();

    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   fetchUsers();
  //   // eslint-disable-next-line
  // }, []);

  const API_URL =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FilterForm />
      <Dashboard users={users} loading={loading} />
    </>
  );
};

export default Users;
