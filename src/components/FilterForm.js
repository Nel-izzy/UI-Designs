import React from "react";

const FilterForm = () => {
  return (
    <form id="filter-form">
      <div class="form-group">
        <label for="org">Organization</label>
        <select class="form-control" id="org">
          <option>Select</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="date">Date </label>
        <input type="date" class="form-control" id="date" placeholder="Date" />
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          type="phone"
          class="form-control"
          id="phone"
          placeholder="Phone"
        />
      </div>
      <div class="form-group">
        <label for="org">Status</label>
        <select class="form-control" id="org">
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
