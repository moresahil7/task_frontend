import React, { useState, useEffect } from "react";
import CustomerData from "./components/CustomerData";

import {
  getCustomers,
  deleteCustomer,
} from "./APICalls/coreapicalls";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [setError] = useState(false);

  const fetchCustomers =  () => {
    getCustomers().then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setCustomers(data);
      }
    });
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCust = (id) => {
    deleteCustomer(id)
    .then(response =>{
      const cust = customers.filter(customer => id !== customer._id)
      setCustomers(cust)
    })
  }

  return (
    <div>
      <CustomerData customers={customers} deleteCust={deleteCust}/>
    </div>
  );
};

export default App;
