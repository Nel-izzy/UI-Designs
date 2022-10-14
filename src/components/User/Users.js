import React, { useState } from "react";
import AdminActions from "../dashboard/AdminActions";
import Dashboard from "../dashboard/Dashboard";
import FilterForm from "../FilterForm";

const Users = () => {
  const [openForm, setOpenForm] = useState(true);
  // eslint-disable-next-line
  const toggleForm = () => setOpenForm(!openForm);

  if (openForm) {
    return (
      <>
        <AdminActions />
        <FilterForm />
        <Dashboard />
      </>
    );
  } else {
    return (
      <>
        <Dashboard />
      </>
    );
  }
};

export default Users;
