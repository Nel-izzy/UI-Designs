import Navbar from "../Layout/Navbar";
import Sidenav from "../Layout/Sidenav";
import Pagination from "../Pagination";

import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="row ">
        <section className="col-sm-3">
          <Sidenav />
        </section>
        <section className="col-sm-9  container">
          <MainContent />
          <Pagination />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
