import React from "react";
import { useNavigate } from "react-router-dom";

const AdminActions = ({ id }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/users/${id}`);
  };
  return (
    <div class="card" id="actions">
      <div class="card-body">
        <p onClick={onClick}>
          <img src="view.png" alt="" />
          {"  "}
          View Details
        </p>
        <p>
          <img src="delete-friend.png" alt="" />
          Blacklist User
        </p>
        <p>
          <img src="activate-user.png" alt="" />
          Activate User
        </p>
      </div>
    </div>
  );
};

export default AdminActions;
