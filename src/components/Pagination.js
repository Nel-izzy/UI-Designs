import React from "react";
import caretUp from "../images/caret-1.png";
import caretBack from "../images/caret-back.png";
import caretForward from "../images/caret-forward.png";

const Pagination = () => {
  return (
    <section className="paginate">
      <article className="page-one">
        <div>Showing</div>
        <div>
          <p>
            100 <img src={caretUp} alt="" />
          </p>{" "}
        </div>
        <div>out of 100</div>
      </article>

      <article className="page-two">
        <div>
          <p>
            {" "}
            <img src={caretBack} alt="" />{" "}
          </p>{" "}
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>15</div>
        <div>16</div>
        <div>
          <p>
            <img src={caretForward} alt="" />
          </p>
        </div>
      </article>
    </section>
  );
};

export default Pagination;
