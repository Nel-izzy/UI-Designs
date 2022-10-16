import React from "react";
import TableRow from "./TableRow";
import Spinner from "./Layout/Spinner";
import filterResultsBtn from "../images/filter-results-button.png";

const Table = ({ loading, users }) => {
  const toggleShowFilterForm = () => {
    var x = document.getElementById("filter-form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  users.length = 9;

  return (
    <table className="table dash">
      <thead>
        <tr className="table-head">
          <th scope="col">
            Organization{" "}
            <img
              src={filterResultsBtn}
              alt=""
              onClick={toggleShowFilterForm}
              className="more"
            />
          </th>
          <th scope="col">
            Username{" "}
            <img
              src={filterResultsBtn}
              alt=""
              onClick={toggleShowFilterForm}
              className="more"
            />
          </th>
          <th scope="col">
            Email{" "}
            <img
              src={filterResultsBtn}
              alt=""
              onClick={toggleShowFilterForm}
              className="more"
            />
          </th>
          <th scope="col">
            Phone number{" "}
            <img
              src={filterResultsBtn}
              alt=""
              onClick={toggleShowFilterForm}
              className="more"
            />
          </th>
          <th scope="col">
            Date Joined{" "}
            <img
              src={filterResultsBtn}
              alt=""
              onClick={toggleShowFilterForm}
              className="more"
            />
          </th>
          <th scope="col">
            Status{" "}
            <img
              src={filterResultsBtn}
              alt=""
              onClick={toggleShowFilterForm}
              className="more"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {loading || users.length < 1 ? (
          <Spinner />
        ) : (
          users.map((user) => (
            <TableRow
              org={user.orgName}
              fullName={`${user.profile.firstName} ${user.profile.firstName}`}
              email={user.email}
              phone={user.profile.phoneNumber}
              date={user.createdAt}
              status="Inactive"
              color="rgb(84, 95, 125)"
              background="rgba(84, 95, 125, 0.06)"
              width={80}
              id={user.id}
              key={user.id}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
