import React from "react";
import briefcase from "./briefcase.png";
import caretUp from "./caret-1.png";
import userFriends from "./user-friends.png";
import users from "./users.png";
import sack from "./sack.png";
import handshakeRegular from "./handshake-regular.png";
import loan from "./loan.png";
import coinSolid from "./coins-solid.png";
import userCheck from "./user-check.png";
import userTimes from "./user-times.png";
import bank from "./bank.png";
import transaction from "./transaction.png";
import userCog from ".user-cog.png";
import scroll from "./scroll.png";
import slidersH from "./sliders-h.png";
import badgePercent from "./badge-percent.png";
import clipboardList from "./clipboard-list.png";

const Sidenav = () => {
  return (
    <ul className="list-group sidenav">
      <li className="list-group-item">
        <p>
          <img src={briefcase} alt="briefcase.png" height={16} width={16} />
        </p>{" "}
        <p> Switch Organization</p>{" "}
        <p>
          <img src={caretUp} alt="" />
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
          <img src={userFriends} alt="" />
        </p>{" "}
        <p>Users</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={users} alt="" />
        </p>{" "}
        <p>Guarantors</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={sack} alt="" height={16} />
        </p>{" "}
        <p>Loans</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={handshakeRegular} alt="" />
        </p>{" "}
        <p> Decision Models</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={piggyBank} alt="" />
        </p>{" "}
        <p>Savings</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={loan} alt="" />{" "}
        </p>
        <p> Loan Requests</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={userCheck} alt="" />{" "}
        </p>
        <p> Whitelist</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={userTimes} alt="" />{" "}
        </p>
        <p> Karma</p>
      </li>
      <li className="list-group-item category">Businesses</li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src={briefcase} alt="" />{" "}
        </p>
        <p> Organization </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={loan} alt="" />
        </p>{" "}
        <p> Loan Products </p>
      </li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src={bank} alt="" height={16} />{" "}
        </p>
        <p> Savings Products </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={coinSolid} alt="" />
        </p>{" "}
        <p> Fees and Charges </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={transaction} alt="" />{" "}
        </p>
        <p> Transactions </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={galaxy} alt="" />{" "}
        </p>{" "}
        <p> Services </p>
      </li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src={userCog} alt="" />{" "}
        </p>
        <p>Service Accounts</p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={scroll} alt="" />{" "}
        </p>
        <p> Settlements </p>
      </li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src={barChart} alt="" />
        </p>{" "}
        <p> Reports</p>
      </li>
      <li className="list-group-item category">Settings</li>
      <li className="list-group-item">
        <p>
          {" "}
          <img src={slidersH} alt="" />{" "}
        </p>
        <p> Preferences </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={badgePercent} alt="" />
        </p>
        <p> Fees and Pricing </p>
      </li>
      <li className="list-group-item">
        <p>
          <img src={clipboardList} alt="" />
        </p>
        <p>Audit Logs</p>
      </li>
    </ul>
  );
};

export default Sidenav;
