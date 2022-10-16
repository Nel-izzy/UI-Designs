import React from "react";
import briefcase from "../../images/briefcase.png";
import caretUp from "../../images/caret-1.png";
import userFriends from "../../images/user-friends.png";
import users from "../../images/users.png";
import sack from "../../images/sack.png";
import handshakeRegular from "../../images/handshake-regular.png";
import loan from "../../images/loan.png";
import coinSolid from "../../images/coins-solid.png";
import userCheck from "../../images/user-check.png";
import userTimes from "../../images/user-times.png";
import bank from "../../images/bank.png";
import transaction from "../../images/transaction.png";
import userCog from "../../images/user-cog.png";
import scroll from "../../images/scroll.png";
import slidersH from "../../images/sliders-h.png";
import badgePercent from "../../images/badge-percent.png";
import clipboardList from "../../images/clipboard-list.png";
import tyre from "../../images/tyre.png";
import signOut from "../../images/sign-out.png";
import home from "../../images/home.png";
import galaxy from "../../images/galaxy.png";
import piggyBank from "../../images/piggy-bank.png";
import barChart from "../../images/chart-bar.png";

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
