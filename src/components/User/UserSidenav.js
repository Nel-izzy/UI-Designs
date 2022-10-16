import React from "react";
import briefcase from "./userSideNav/images/briefcase.png";
import caretUp from "./userSideNav/images/caret-1.png";
import userFriends from "./userSideNav/images/user-friends.png";
import users from "./userSideNav/images/users.png";
import sack from "./userSideNav/images/sack.png";
import handshakeRegular from "./userSideNav/images/handshake-regular.png";
import loan from "./userSideNav/images/loan.png";
import coinSolid from "./userSideNav/images/coins-solid.png";
import userCheck from "./userSideNav/images/user-check.png";
import userTimes from "./userSideNav/images/user-times.png";
import bank from "./userSideNav/images/bank.png";
import transaction from "./userSideNav/images/transaction.png";
import userCog from "./userSideNav/images/user-cog.png";
import scroll from "./userSideNav/images/scroll.png";
import slidersH from "./userSideNav/images/sliders-h.png";
import badgePercent from "./userSideNav/images/badge-percent.png";
import clipboardList from "./userSideNav/images/clipboard-list.png";
import tyre from "./userSideNav/images/tyre.png";
import signOut from "./userSideNav/images/sign-out.png";
import home from "./userSideNav/images/home.png";
import galaxy from "./userSideNav/images/galaxy.png";
import piggyBank from "./userSideNav/images/piggy-bank.png";
import barChart from "./userSideNav/images/chart-bar.png";

const UserSidenav = () => {
  return (
    <ul class="list-group sidenav">
      <li class="list-group-item">
        <p>
          <img src={briefcase} alt="" height={16} />
        </p>{" "}
        <p> Switch Organization</p>{" "}
        <p>
          <img src={caretUp} alt="" />
        </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={home} alt="" />
        </p>{" "}
        <p>Dashboard</p>
      </li>
      <li class="list-group-item category">Customers</li>
      <li class="list-group-item">
        <p>
          <img src={userFriends} alt="" />
        </p>{" "}
        <p>Users</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={users} alt="" />
        </p>{" "}
        <p>Guarantors</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={sack} alt="" height={16} />
        </p>{" "}
        <p>Loans</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={handshakeRegular} alt="" />
        </p>{" "}
        <p> Decision Models</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={piggyBank} alt="" />
        </p>{" "}
        <p>Savings</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={loan} alt="" />{" "}
        </p>
        <p> Loan Requests</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={userCheck} alt="" />{" "}
        </p>
        <p> Whitelist</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={userTimes} alt="" />{" "}
        </p>
        <p> Karma</p>
      </li>
      <li class="list-group-item category">Businesses</li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src={briefcase} alt="" />{" "}
        </p>
        <p> Organization </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={loan} alt="" />
        </p>{" "}
        <p> Loan Products </p>
      </li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src={bank} alt="" height={16} />{" "}
        </p>
        <p> Savings Products </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={coinSolid} alt="" />
        </p>{" "}
        <p> Fees and Charges </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={transaction} alt="" />{" "}
        </p>
        <p> Transactions </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={galaxy} alt="" />{" "}
        </p>{" "}
        <p> Services </p>
      </li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src={userCog} alt="" />{" "}
        </p>
        <p>Service Accounts</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={scroll} alt="" />{" "}
        </p>
        <p> Settlements </p>
      </li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src={barChart} alt="" />
        </p>{" "}
        <p> Reports</p>
      </li>
      <li class="list-group-item category">Settings</li>
      <li class="list-group-item">
        <p>
          {" "}
          <img src={slidersH} alt="" />{" "}
        </p>
        <p> Preferences </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={badgePercent} alt="" />
        </p>
        <p> Fees and Pricing </p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={clipboardList} alt="" />
        </p>
        <p>Audit Logs</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={tyre} alt="" />
        </p>
        <p>System Messages</p>
      </li>
      <li class="list-group-item">
        <p>
          <img src={signOut} alt="" />
        </p>
        <p>Logout</p>
      </li>
    </ul>
  );
};

export default UserSidenav;
