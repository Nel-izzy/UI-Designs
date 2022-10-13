import React from "react";

const Sidenav = () => {
  return (
    <ul class="list-group">
      <li class="list-group-item">
        <img src="briefcase.png" alt="" /> Switch Organization <span>&or;</span>
      </li>
      <li class="list-group-item">
        <img src="home.png" alt="" /> Dashboard
      </li>
      <li class="list-group-item">Customers</li>
      <li class="list-group-item" style={userStyle}>
        <img src="user-friends.png" alt="" /> Users
      </li>
      <li class="list-group-item">
        <img src="users.png" alt="" /> Guarantors
      </li>
      <li class="list-group-item">
        <img src="sack.png" alt="" /> Loans
      </li>
      <li class="list-group-item">
        <img src="handshake-regular.png" alt="" /> Decision Models
      </li>
      <li class="list-group-item">
        <img src="piggy-bank.png" alt="" /> Savings
      </li>
      <li class="list-group-item">
        <img src="loan.png" alt="" /> Loan Requests
      </li>
      <li class="list-group-item">
        <img src="user-check.png" alt="" /> Whitelist
      </li>
      <li class="list-group-item">
        <img src="user-times.png" alt="" /> Karma
      </li>
      <li class="list-group-item">Businesses</li>
      <li class="list-group-item">
        <img src="briefcase.png" alt="" /> Organization
      </li>
      <li class="list-group-item">
        <img src="loan.png" alt="" />
        Loan Products
      </li>
      <li class="list-group-item">
        <img src="bank.png" alt="" /> Savings Products
      </li>
      <li class="list-group-item">
        <img src="coins-solid.png" alt="" /> Fees and Charges
      </li>
      <li class="list-group-item">
        <img src="transaction.png" alt="" />
        Transactions
      </li>
      <li class="list-group-item">
        <img src="galaxy.png" alt="" /> Services
      </li>
      <li class="list-group-item">
        <img src="user-cog.png" alt="" /> Service Accounts
      </li>
      <li class="list-group-item">
        <img src="scroll.png" alt="" /> Settlements
      </li>
      <li class="list-group-item">
        <img src="chart-bar.png" alt="" /> Reports
      </li>
      <li class="list-group-item">Settings</li>
      <li class="list-group-item">
        <img src="sliders-h.png" alt="" /> Preferences
      </li>
      <li class="list-group-item">
        <img src="badge-percent.png" alt="" /> Fees and Pricing
      </li>
      <li class="list-group-item">
        <img src="clipboard-list.png" alt="" /> Audit Logs
      </li>
    </ul>
  );
};

const userStyle = {
  background: "#39CDCC",
  opacity: 0.8,
};

export default Sidenav;
