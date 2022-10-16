import React from "react";

const FullDetails = ({ user }) => {
  const { email, guarantor, socials, education, profile } = user;
  const { phoneNumber, firstName, lastName, gender, bvn } = profile;
  const { facebook, instagram, twitter } = socials;
  const {
    sector,
    level,
    employmentStatus,
    duration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
  } = education;

  const totalMonthlyIncome = monthlyIncome.reduce((prev, curr) =>
    (parseFloat(prev) + parseFloat(curr)).toFixed(2)
  );

  return (
    <div className="full-details">
      <section>
        <h3>Personal Information</h3>
        <article className="row">
          <div className="col-sm-3">
            <p>full Name</p>
            <p>
              {firstName} {lastName}
            </p>
          </div>
          <div className="col-sm-2">
            <p>Phone Number</p>
            <p>
              {phoneNumber.length > 15 ? phoneNumber.slice(0, -6) : phoneNumber}
            </p>
          </div>
          <div className="col-sm-3">
            <p>Email Address</p>
            <p className="email-addr">{email}</p>
          </div>
          <div className="col-sm-2">
            <p>Bvn</p>
            <p>{bvn}</p>
          </div>
          <div className="col-sm-2">
            <p>Gender</p>
            <p>{gender}</p>
          </div>
        </article>
        <article className="row">
          <div className="col-sm-3">
            <p>marital status</p>
            <p>Single</p>
          </div>
          <div className="col-sm-2">
            <p>children</p>
            <p>None</p>
          </div>
          <div className="col-sm-3">
            <p>Type of residence</p>
            <p>Parent's Apartment</p>
          </div>
        </article>
      </section>
      <section>
        <h3>Education and Employment</h3>
        <article className="row">
          <div className="col-sm-3">
            <p>level of education</p>
            <p>{level}</p>
          </div>
          <div className="col-sm-3">
            <p>employment status</p>
            <p>{employmentStatus}</p>
          </div>
          <div className="col-sm-3">
            <p>sector of employment</p>
            <p>{sector}</p>
          </div>
          <div className="col-sm-3">
            <p>duration of employment</p>
            <p>{duration}</p>
          </div>
        </article>
        <article className="row">
          <div className="col-sm-3">
            <p>office email</p>
            <p className="email-addr">{officeEmail}</p>
          </div>
          <div className="col-sm-3">
            <p>monthly income</p>
            <p>₦{totalMonthlyIncome}</p>
          </div>
          <div className="col-sm-3">
            <p>loan repayment</p>
            <p>₦{loanRepayment}</p>
          </div>
        </article>
      </section>
      <section>
        <h3>Socials</h3>
        <article className="row">
          <div className="col-sm-3">
            <p>Twitter</p>
            <p>{twitter}</p>
          </div>
          <div className="col-sm-3">
            <p>Facebook</p>
            <p>{facebook}</p>
          </div>
          <div className="col-sm-3">
            <p>Instagram</p>
            <p>{instagram}</p>
          </div>
        </article>
      </section>
      <section>
        <h3>Guarantor</h3>
        <article className="row">
          <div className="col-sm-3">
            <p>full Name</p>
            <p>
              {guarantor.firstName} {guarantor.lastName}
            </p>
          </div>
          <div className="col-sm-3">
            <p>Phone Number</p>
            <p>
              {guarantor.phoneNumber.length > 15
                ? guarantor.phoneNumber.slice(0, -6)
                : guarantor.phoneNumber}
            </p>
          </div>
          <div className="col-sm-3">
            <p>Email Address</p>
            <p>debby@gmail.com</p>
          </div>
          <div className="col-sm-2">
            <p>Relationship</p>
            <p>Sister</p>
          </div>
        </article>
      </section>
      <section>
        <article className="row">
          <div className="col-sm-3">
            <p>full Name</p>
            <p>Debby Ogana</p>
          </div>
          <div className="col-sm-3">
            <p>Phone Number</p>
            <p>07060780922</p>
          </div>
          <div className="col-sm-3">
            <p>Email Address</p>
            <p>debby@gmail.com</p>
          </div>
          <div className="col-sm-2">
            <p>Relationship</p>
            <p>Sister</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default FullDetails;
