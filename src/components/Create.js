import React, { useState } from "react";
import { createCustomer } from "../APICalls/coreapicalls";
import { useNavigate } from "react-router-dom";
const Create = () => {
  let navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    age: "",
  });
  const { name, mobile, age } = customer;

  const onSubmission = (e) => {
    e.preventDefault();
    navigate("/");

    setCustomer({ ...customer });
    createCustomer(customer).then((data) => {
      if (data.error) {
        setCustomer({ ...customer });
      } else {
        setCustomer({
          ...customer,
          name: "",
          mobile: "",
          age: "",
        });
      }
    });
  };
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-5 d-flex justify-content-center">
      <form action="" onSubmit={(e) => onSubmission(e)}>
        <div className="">
          <label className="form-label">
            Name:
            <input
              className="form-control"
              type="text"
              name="name"
              id=""
              required
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="mobile">
          <label className="form-label">
            Mobile:
            <input
              width="100px"
              className="form-control"
              type="tel"
              name="mobile"
              id=""
              required
              value={mobile}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="">
          <label className="form-label">
            Age:
            <input
              className="form-control"
              type="age"
              name="age"
              id=""
              value={age}
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="">
          <input
            className="btn btn-secondary"
            type="submit"
            value="Add Customer"
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
