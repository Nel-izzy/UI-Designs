import Union from "../../../src/images/Union.png";
import lendsqr from "../../../src/images/lendsqr.png";
import image4 from "../../../src/images/image4.png";
import caretDropdown from "../../../src/images/caret.png";
import searchIcon from "../../../src/images/search-icon.png";

const Navbar = () => {
  return (
    <nav className="header">
      <section className="row">
        <article className="col-sm-3">
          <p className="page-first-p">
            <img
              src={Union}
              alt="Union"
              width={25}
              height="25px"
              className="img-first"
            />
            <img src={lendsqr} alt="Lendsqr" width={138} height="36px" />
          </p>
        </article>
        <article className="col-sm-4 search-form">
          <p>
            <input
              type="text"
              placeholder="Search for anything"
              className="searchbar"
            />
            <button className="searchbar-btn">
              <img src={searchIcon} alt="" />
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
              <img src={image4} alt="" className="img-rounded" />{" "}
            </li>
            <li>Adedeji</li>
            <li>
              <img src={caretDropdown} alt="" />
            </li>
          </ul>
        </article>
      </section>
    </nav>
  );
};

export default Navbar;
