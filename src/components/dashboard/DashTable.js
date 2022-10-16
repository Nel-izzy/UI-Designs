import React from "react";
import TableRow from "../TableRow";
import filterResultsBtn from "../../images/filter-results-button.png";

const Table = () => {
  return (
    <table class="table home">
      <thead>
        <tr className="table-head">
          <th scope="col">
            Organization <img src={filterResultsBtn} alt="" />
          </th>
          <th scope="col">
            Username <img src={filterResultsBtn} alt="" />
          </th>
          <th scope="col">
            Email <img src={filterResultsBtn} alt="" />
          </th>
          <th scope="col">
            Phone number <img src={filterResultsBtn} alt="" />
          </th>
          <th scope="col">
            Date Joined <img src={filterResultsBtn} alt="" />
          </th>
          <th scope="col">
            Status <img src={filterResultsBtn} alt="" />
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          org="Lendsqr"
          fullName="Adedeji"
          email="adedeji@lendsqr.com"
          phone="08078903721"
          date="May 15, 2020 10:00 AM"
          status="Inactive"
          color="rgb(84, 95, 125)"
          background="rgba(84, 95, 125, 0.06)"
          width={80}
        />
        <TableRow
          org="Irorun"
          fullName="Debby Ogana"
          email="debby2@irorun.com"
          phone="08160780928"
          date="Apr 30, 2020 10:00 AM"
          status="Pending"
          color="rgb(233, 178, 0)"
          background="rgba(233, 178, 0, 0.1)"
          width={90}
        />
        <TableRow
          org="Lendstar"
          fullName="Grace Effiom"
          email="grace@lendstar.com"
          phone="07060780922"
          date="Apr 30, 2020 10:00 AM"
          status="Blacklisted"
          color="rgb(228, 3, 59)"
          background="rgba(228, 3, 59, 0.1)"
          width={100}
        />
        <TableRow
          org="Lendsqr"
          fullName="Tosin Dokunmu"
          email="tosin@lendsqr.com"
          phone="07003309226"
          date="Apr 10, 2020 10:00 AM"
          status="Pending"
          color="rgb(233, 178, 0)"
          background="rgba(233, 178, 0, 0.1)"
          width={70}
        />
        <TableRow
          org="Lendstar"
          fullName="Grace Effiom"
          email="grace@lendstar.com"
          phone="07060780922"
          date="Apr 30, 2020 10:00 AM"
          status="Active"
          color="rgb(57, 205, 98)"
          background="rgba(57, 205, 98, 0.06)"
          width={70}
        />
        <TableRow
          org="Lendsqr"
          fullName="Tosin Dokunmu"
          email="tosin@lendsqr.com"
          phone="08060780900"
          date="Apr 10, 2020 10:00 AM"
          status="Active"
          color="rgb(57, 205, 98)"
          background="rgba(57, 205, 98, 0.06)"
          width={70}
        />
        <TableRow
          org="Lendstar"
          fullName="Grace Effiom"
          email="grace@lendstar.com"
          phone="07060780922"
          date="Apr 30, 2020 10:00 AM"
          status="Blacklisted"
          color="rgb(228, 3, 59)"
          background="rgba(228, 3, 59, 0.1)"
          width={100}
        />
        <TableRow
          org="Lendsqr"
          fullName="Tosin Dokunmu"
          email="tosin@lendsqr.com"
          phone="07003309226"
          date="Apr 10, 2020 10:00 AM"
          status="Inactive"
          color="rgb(84, 95, 125)"
          background="rgba(84, 95, 125, 0.06)"
          width={80}
        />
        <TableRow
          org="Lendstar"
          fullName="Grace Effiom"
          email="grace@lendstar.com"
          phone="07060780922"
          date="Apr 30, 2020 10:00 AM"
          status="Inactive"
          color="rgb(84, 95, 125)"
          background="rgba(84, 95, 125, 0.06)"
          width={80}
        />
      </tbody>
    </table>
  );
};

export default Table;
