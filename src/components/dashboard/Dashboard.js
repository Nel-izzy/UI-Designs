// import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import Sidenav from "../Layout/Sidenav";
import Pagination from "../Pagination";

import MainContent from "./MainContent";

// const API_URL =
//   "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const Dashboard = ({ loading, users }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  const toggleShowActions = () => {
    var x = document.getElementById("actions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  // useEffect(() => {
  //   fetchUsers();
  //   // eslint-disable-next-line
  // }, []);

  // const fetchUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(API_URL);
  //     const data = await res.json();
  //     setUsers(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setLoading(false);
  // };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="row ">
        <section className="col-sm-3">
          <Sidenav />
        </section>
        <section className="col-sm-9">
          <MainContent
            loading={loading}
            users={users}
            toggleShowActions={toggleShowActions}
          />
          <Pagination />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
