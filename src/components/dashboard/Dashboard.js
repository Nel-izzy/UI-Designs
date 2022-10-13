import React, { Fragment } from "react";
import Navbar from "../Layout/Navbar";
import Sidenav from "../Layout/Sidenav";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="row">
        <section className="col-sm-3">
          <Sidenav />
        </section>
        <section className="col-sm-9">
          <MainContent />
        </section>
      </div>
    </Fragment>
  );
};

export default Dashboard;
