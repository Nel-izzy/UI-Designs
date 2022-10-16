import Navbar from "../Layout/Navbar";
import UserSidenav from "./UserSidenav";
import Pagination from "../Pagination";

import UserContent from "./UserContent";

const UserDash = ({ loading, users }) => {
  return (
    <div className="user-content">
      <Navbar />
      <div className="row ">
        <section className="col-sm-3">
          <UserSidenav />
        </section>
        <section className="col-sm-9 ">
          <UserContent loading={loading} users={users} />
          <Pagination />
        </section>
      </div>
    </div>
  );
};

export default UserDash;
