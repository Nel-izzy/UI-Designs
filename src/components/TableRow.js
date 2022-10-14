import React from "react";

const TableRow = ({
  org,
  user,
  email,
  phone,
  date,
  status,
  color,
  background,
  width,
}) => {
  return (
    <tr className="table-row">
      <td>{org}</td>
      <td>{user}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{date}</td>
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
        <img src="ic-more-vert.png" alt="" />
      </td>
    </tr>
  );
};

export default TableRow;
