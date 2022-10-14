import React from "react";
import Cards from "../Cards";
import Table from "../Table";

const MainContent = () => {
  return (
    <div>
      <h1 id="user-dash">Users</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainContent;
