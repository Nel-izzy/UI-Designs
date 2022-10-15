import React, { Fragment } from "react";
import Moment from "react-moment";
import AdminActions from "./dashboard/AdminActions";
const TableRow = ({
  org,
  fullName,
  email,
  phone,
  date,
  status,
  color,
  background,
  width,
  toggleShowActions,
  id,
}) => {
  return (
    <Fragment>
      <AdminActions id={id} />
      <tr className="table-row">
        <td>{org}</td>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone.length > 15 ? phone.slice(0, -6) : phone}</td>
        <td>
          <Moment format="MMM Do YYYY, h:mm A">{date}</Moment>
        </td>
        <td className="status-dash">
          <p
            style={{
              background,
              width,
            }}
          >
            <span style={{ color }}>{status}</span>
          </p>
        </td>
        <td>
          <img src="ic-more-vert.png" alt="" onClick={toggleShowActions} />
        </td>
      </tr>
    </Fragment>
  );
};

export default TableRow;
