import React from "react";

const Cards = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <p>
              <img src="users-icon.png" alt="" />
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
              <img src="active-users.png" alt="" />
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
              <img src="users-loans.png" alt="" />
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
              <img src="user-savings.png" alt="" />
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
