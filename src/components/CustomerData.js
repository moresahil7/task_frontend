import React from "react";
import Cards from "../containers/Cards";
import "./cust.css";
import { Link } from "react-router-dom";

const CustomerData = ({ customers, deleteCust }) => {
  return (
    <div>
      <div className="heading">
        <h1>CRUD APPLICATION</h1>
      </div>
      <div className="button">
        <Link className="link" to="/create/customer" target="_blank" >Add Customer</Link>
      </div>
      <div className="cards">
        {customers.map((customer, index) => {
          return (
            <div key={index} className="card">
              <Cards customer={customer} deleteCust={deleteCust} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerData;
