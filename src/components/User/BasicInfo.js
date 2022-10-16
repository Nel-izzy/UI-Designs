import React from "react";
import ratingIconFilled from "../../images/star-filled.png";
import ratingIcon from "../../images/star.png";

const BasicInfo = ({ user }) => {
  const { firstName, lastName, avatar } = user.profile;

  const { accountBalance, accountNumber } = user;

  return (
    <section className="basic-info">
      <article className="row">
        <div className="col-lg-2 col-md-4 col-sm-6">
          <img src={avatar} alt="" height={100} width={100} />{" "}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="basic">
            {firstName} {lastName}
          </p>
          <p className="user-id">{accountNumber}</p>{" "}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <p className="user-tier">
            User’s Tier
            <br />
            <img src={ratingIconFilled} alt="" />
            <img src={ratingIcon} alt="" />
            <img src={ratingIcon} alt="" />{" "}
          </p>{" "}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 account">
          <p className="basic">₦{accountBalance}</p>
          <p className="user-bank">9912345678/Providus Bank</p>
        </div>
      </article>
      <article className="row">
        <div className="col-lg-2 col-md-4 col-sm-6">
          <p>General Details</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <p>Documents</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <p>Bank Details</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <p>Loans</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <p>Savings</p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6">
          <p>App and System</p>
        </div>
      </article>
    </section>
  );
};

export default BasicInfo;
