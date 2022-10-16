import React from "react";
import briefcase from "../../../src/images/briefcase.png";

const Sidenav = () => {
  return (
    <ul className="list-group sidenav">
      <li className="list-group-item">
        <p>
          <img src={briefcase} alt="briefcase.png" height={16} width={16} />
        </p>{" "}
        <p> Switch Organization</p>{" "}
        <p>
          <img src="caret-1.png" alt="" />
        </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="home.png" alt="" />
        </p>{" "}
        <p>Dashboard</p>
      </li>
      <li className="list-group-item category">Customers</li>
      <li className="list-group-item">
        <p>
          <img src="user-friends.png" alt="" />
        </p>{" "}
        <p>Users</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="users.png" alt="" />
        </p>{" "}
        <p>Guarantors</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="sack.png" alt="" height={16} />
        </p>{" "}
        <p>Loans</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="handshake-regular.png" alt="" />
        </p>{" "}
        <p> Decision Models</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="piggy-bank.png" alt="" />
        </p>{" "}
        <p>Savings</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="loan.png" alt="" />{" "}
        </p>
        <p> Loan Requests</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="user-check.png" alt="" />{" "}
        </p>
        <p> Whitelist</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="user-times.png" alt="" />{" "}
        </p>
        <p> Karma</p>
      </li>
      <li className="list-group-item category">Businesses</li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src="briefcase.png" alt="" />{" "}
        </p>
        <p> Organization </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="loan.png" alt="" />
        </p>{" "}
        <p> Loan Products </p>
      </li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src="bank.png" alt="" height={16} />{" "}
        </p>
        <p> Savings Products </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="coins-solid.png" alt="" />
        </p>{" "}
        <p> Fees and Charges </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="transaction.png" alt="" />{" "}
        </p>
        <p> Transactions </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="galaxy.png" alt="" />{" "}
        </p>{" "}
        <p> Services </p>
      </li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src="user-cog.png" alt="" />{" "}
        </p>
        <p>Service Accounts</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="scroll.png" alt="" />{" "}
        </p>
        <p> Settlements </p>
      </li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src="chart-bar.png" alt="" />
        </p>{" "}
        <p> Reports</p>
      </li>
      <li className="list-group-item category">Settings</li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src="sliders-h.png" alt="" />{" "}
        </p>
        <p> Preferences </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="badge-percent.png" alt="" />
        </p>
        <p> Fees and Pricing </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src="clipboard-list.png" alt="" />
        </p>
        <p>Audit Logs</p>
      </li>
    </ul>
  );
};

export default Sidenav;
