import React, { useEffect, useState } from "react";
import spinner from "../Layout/spinner.gif";
import backArrow from "../../images/back-arrow.png";
import BasicInfo from "./BasicInfo";
import FullDetails from "./FullDetails";
import { useNavigate } from "react-router-dom";

const MainUserContent = ({ id }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      return JSON.parse(existingUser);
    } else {
      return null;
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
    return (
      <p>
        <img src={spinner} alt="Loading..." />
      </p>
    );
  } else {
    return (
      <section>
        <div className="navigate-user">
          <p onClick={() => navigate(-1)}>
            <img src={backArrow} alt="" /> Back to Users
          </p>
          <div className="action-buttons">
            <p>User Details </p>
            <p>
              <button>blacklist user</button>
              <button>activate user</button>
            </p>
          </div>
        </div>
        <BasicInfo user={user} />
        <FullDetails user={user} />
      </section>
    );
  }
};

export default MainUserContent;
