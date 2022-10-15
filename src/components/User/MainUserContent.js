import React, { useEffect, useState } from "react";
import Spinner from "../Layout/Spinner";

import BasicInfo from "./BasicInfo";
import FullDetails from "./FullDetails";

const MainUserContent = ({ id }) => {
  // const [user, setUser] = useState({});
  const [user, setUser] = useState(() => {
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      return JSON.parse(existingUser);
    } else {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user === null || user.id !== id) {
      getUserDetails();
    }

    localStorage.setItem("user", JSON.stringify(user));

    // eslint-disable-next-line
  }, [user]);

  const API_URL = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || user === null) {
    return <Spinner />;
  } else {
    return (
      <div>
        <BasicInfo user={user} />
        <FullDetails user={user} />
      </div>
    );
  }
};

export default MainUserContent;
