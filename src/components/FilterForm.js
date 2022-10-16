import React from "react";

const FilterForm = () => {
  return (
    <form id="filter-form">
      <div className="form-group">
        <label htmlFor="filter-org">Organization</label>
        <select className="form-control" id="filter-org">
          <option>Select</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="filter-email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="filter-email"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="filter-password">Password</label>
        <input
          type="password"
          className="form-control"
          id="filter-password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="filter-date">Date </label>
        <input
          type="date"
          className="form-control"
          id="filter-date"
          placeholder="Date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="filter-phone">Phone Number</label>
        <input
          type="phone"
          className="form-control"
          id="filter-phone"
          placeholder="Phone"
        />
      </div>
      <div className="form-group">
        <label htmlFor="filter-status">Status</label>
        <select className="form-control" id="filter-status">
          <option>Select</option>
        </select>
      </div>
      <div className="filter-button">
        <input type="reset" value="Reset" />
        <input type="submit" value="Filter" />
      </div>
    </form>
  );
};

export default FilterForm;
