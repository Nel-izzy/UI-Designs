import React from "react";
import TableRow from "./TableRow";
import Spinner from "./Layout/Spinner";

const Table = ({ loading, users, toggleShowActions }) => {
  return (
    <table class="table dash">
      <thead>
        <tr className="table-head">
          <th scope="col">
            Organization <img src="filter-results-button.png" alt="" />
          </th>
          <th scope="col">
            Username <img src="filter-results-button.png" alt="" />
          </th>
          <th scope="col">
            Email <img src="filter-results-button.png" alt="" />
          </th>
          <th scope="col">
            Phone number <img src="filter-results-button.png" alt="" />
          </th>
          <th scope="col">
            Date Joined <img src="filter-results-button.png" alt="" />
          </th>
          <th scope="col">
            Status <img src="filter-results-button.png" alt="" />
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
              toggleShowActions={toggleShowActions}
              id={user.id}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
