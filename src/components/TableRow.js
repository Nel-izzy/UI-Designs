import React, { useState, Fragment } from "react";
import Moment from "react-moment";
import AdminActions from "./dashboard/AdminActions";
import more from "../images/ic-more-vert.png";

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

  id,
}) => {
  const [showActions, setShowActions] = useState(false);
  const tableRow = (
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
      <td onClick={() => setShowActions(!showActions)}>
        <img src={more} alt="" className="more" />
      </td>
    </tr>
  );

  if (showActions) {
    return (
      <Fragment>
        <AdminActions id={id} />
        {tableRow}
      </Fragment>
    );
  } else {
    return tableRow;
  }
};

export default TableRow;
