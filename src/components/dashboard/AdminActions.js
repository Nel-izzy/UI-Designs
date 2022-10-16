import React from "react";
import { useNavigate } from "react-router-dom";
import view from "../../images/view.png";
import activateUser from "../../images/activate-user.png";
import deleteFriend from "../../images/delete-friend.png";

const AdminActions = ({ id }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/users/${id}`);
  };
  return (
    <div class="card" id="actions">
      <div class="card-body">
        <p onClick={onClick} className="more">
          <img src={view} alt="" />
          View Details
        </p>
        <p className="more">
          <img src={deleteFriend} alt="" />
          Blacklist User
        </p>
        <p className="more">
          <img src={activateUser} alt="" />
          Activate User
        </p>
      </div>
    </div>
  );
};

export default AdminActions;
