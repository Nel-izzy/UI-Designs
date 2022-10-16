import React from "react";
import Cards from "../Cards";
import Table from "../Table";

const UserContent = ({ loading, users }) => {
  return (
    <div>
      <h1 id="user-dash">Users</h1>
      <Cards />
      <Table loading={loading} users={users} />
    </div>
  );
};

export default UserContent;
