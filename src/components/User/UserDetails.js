import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";

import MainUserContent from "./MainUserContent";
import UserSidenav from "./UserSidenav";

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="dashboard user-details">
      <Navbar />
      <div className="row ">
        <section className="col-sm-3">
          <UserSidenav />
        </section>
        <section className="col-sm-9  container">
          <MainUserContent id={id} />
        </section>
      </div>
    </div>
  );
};

export default UserDetails;
