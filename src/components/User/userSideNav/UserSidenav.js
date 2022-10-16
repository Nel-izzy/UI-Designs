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
import tyre from "./tyre.png";
import signOut from "./sign-out.png";

const UserSidenav = () => {
  return (
    <ul class="list-group sidenav">
      <li class="list-group-item">
        <p>
          <img src="briefcase.png" alt="" height={16} />
        </p>{" "}
        <p> Switch Organization</p>{" "}
        <p>
          <img src="caret-1.png" alt="" />
        </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="home.png" alt="" />
        </p>{" "}
        <p>Dashboard</p>
      </li>
      <li class="list-group-item category">Customers</li>
      <li class="list-group-item">
        <p>
          <img src="user-friends.png" alt="" />
        </p>{" "}
        <p>Users</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="users.png" alt="" />
        </p>{" "}
        <p>Guarantors</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="sack.png" alt="" height={16} />
        </p>{" "}
        <p>Loans</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="handshake-regular.png" alt="" />
        </p>{" "}
        <p> Decision Models</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="piggy-bank.png" alt="" />
        </p>{" "}
        <p>Savings</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="loan.png" alt="" />{" "}
        </p>
        <p> Loan Requests</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="user-check.png" alt="" />{" "}
        </p>
        <p> Whitelist</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="user-times.png" alt="" />{" "}
        </p>
        <p> Karma</p>
      </li>
      <li class="list-group-item category">Businesses</li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src="briefcase.png" alt="" />{" "}
        </p>
        <p> Organization </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="loan.png" alt="" />
        </p>{" "}
        <p> Loan Products </p>
      </li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src="bank.png" alt="" height={16} />{" "}
        </p>
        <p> Savings Products </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="coins-solid.png" alt="" />
        </p>{" "}
        <p> Fees and Charges </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="transaction.png" alt="" />{" "}
        </p>
        <p> Transactions </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="galaxy.png" alt="" />{" "}
        </p>{" "}
        <p> Services </p>
      </li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src="user-cog.png" alt="" />{" "}
        </p>
        <p>Service Accounts</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="scroll.png" alt="" />{" "}
        </p>
        <p> Settlements </p>
      </li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src="chart-bar.png" alt="" />
        </p>{" "}
        <p> Reports</p>
      </li>
      <li class="list-group-item category">Settings</li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src="sliders-h.png" alt="" />{" "}
        </p>
        <p> Preferences </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="badge-percent.png" alt="" />
        </p>
        <p> Fees and Pricing </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="clipboard-list.png" alt="" />
        </p>
        <p>Audit Logs</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="tyre.png" alt="" />
        </p>
        <p>System Messages</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src="sign-out.png" alt="" />
        </p>
        <p>Logout</p>
      </li>
    </ul>
  );
};

export default UserSidenav;
