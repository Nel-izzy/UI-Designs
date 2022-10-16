import React from "react";
import Cards from "../Cards";
import DashTable from "./DashTable";

const MainContent = () => {
  return (
    <div>
      <h1 id="user-dash">Users</h1>
      <Cards />
      <DashTable />
    </div>
  );
};

export default MainContent;
