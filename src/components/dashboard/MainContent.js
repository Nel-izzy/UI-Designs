import React from "react";
import Cards from "../Cards";
import Table from "../Table";

const MainContent = ({ loading, users, toggleShowActions }) => {
  return (
    <div>
      <h1 id="user-dash">Users</h1>
      <Cards />
      <Table
        loading={loading}
        users={users}
        toggleShowActions={toggleShowActions}
      />
    </div>
  );
};

export default MainContent;
