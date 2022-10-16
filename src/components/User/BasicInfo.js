import React from "react";
import ratingIconFilled from "../../images/star-filled.png";
import ratingIcon from "../../images/star.png";

const BasicInfo = ({ user }) => {
  const { firstName, lastName, avatar } = user.profile;

  const { accountBalance, accountNumber } = user;

  return (
    <section className="basic-info">
      <article className="row">
        <div className="col-sm-2">
          <img src={avatar} alt="" height={100} width={100} />{" "}
        </div>
        <div className="col-sm-3">
          <p className="basic">
            {firstName} {lastName}
          </p>
          <p className="user-id">{accountNumber}</p>{" "}
        </div>
        <div className="col-sm-2">
          <p className="user-tier">
            User’s Tier
            <br />
            <img src={ratingIconFilled} alt="" />
            <img src={ratingIcon} alt="" />
            <img src={ratingIcon} alt="" />{" "}
          </p>{" "}
        </div>
        <div className="col-sm-3">
          <p className="basic">₦{accountBalance}</p>
          <p className="user-bank">9912345678/Providus Bank</p>
        </div>
      </article>
      <article className="row">
        <div className="col-sm-2">
          <p>General Details</p>
        </div>
        <div className="col-sm-2">
          <p>Documents</p>
        </div>
        <div className="col-sm-2">
          <p>Bank Details</p>
        </div>
        <div className="col-sm-2">
          <p>Loans</p>
        </div>
        <div className="col-sm-2">
          <p>Savings</p>
        </div>
        <div className="col-sm-2">
          <p>App and System</p>
        </div>
      </article>
    </section>
  );
};

export default BasicInfo;
