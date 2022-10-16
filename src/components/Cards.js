import React from "react";
import userIcon from "../images/users-icon.png";
import activeUsers from "../images/active-users.png";
import userLoans from "../images/users-loans.png";
import userSavings from "../images/user-savings.png";

const Cards = () => {
  return (
    <div className="row cards">
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <p>
              <img src={userIcon} alt="" />
            </p>
            <p className="card-text first">USERS</p>
            <p className="card-text second">2,453</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <p>
              <img src={activeUsers} alt="" />
            </p>
            <p className="card-text first">ACTIVE USERS</p>
            <p className="card-text second">2,453</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <p>
              <img src={userLoans} alt="" />
            </p>
            <p className="card-text first">USERS WITH LOANS</p>
            <p className="card-text second">12,453</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <p>
              <img src={userSavings} alt="" />
            </p>
            <p className="card-text first">USERS WITH SAVINGS</p>
            <p className="card-text second">102,453</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
