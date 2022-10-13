import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <section className="row header">
      <article className="col-sm-3">
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
      </article>
      <article className="col-sm-4">
        <p>
          <input
            type="text"
            placeholder="Search for anything"
            className="searchbar"
          />
          <button className="searchbar-btn">
            <AiOutlineSearch />
          </button>
        </p>
      </article>
      <article className="col-sm-2"></article>
      <article className="col-sm-3">
        <ul>
          <li>
            <a href="#!">Docs</a>
          </li>
          <li>
            <img src="vector.png" alt="" />{" "}
          </li>
          <li>
            <img src="image 4.png" alt="" className="img-rounded" />{" "}
          </li>
          <li>Adedeji</li>
          <li>
            <img src="caret.png" alt="" />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Navbar;
