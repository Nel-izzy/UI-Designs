import React, { Fragment } from "react";

const LoginPage = () => {
  return (
    <Fragment>
      <p className="page-first-p">
        <img
          src="Union.png"
          alt="Union"
          width={25}
          height="25px"
          className="img-first"
        />
        <img src="lendsqr.png" alt="Lendsqr" width={138} height="36px" />
      </p>

      <section className="row Login">
        <article className="col s12 m4">
          <img src="pablo-sign-in.png" alt="" />
        </article>
        <article className="col m3 s12"></article>
        <article className="col m5 s12">
          <h3 id="welcome">Welcome!</h3>
          <p id="p-details">Enter Details below</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p id="forgot">Forgot Password?</p>
          <button type="submit">
            <span>LOG IN</span>{" "}
          </button>
        </article>
      </section>
    </Fragment>
  );
};

export default LoginPage;
