export const getCustomers = () => {
  return fetch("https://crudintask.herokuapp.com/customer/", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCustomerById = (id) => {
  return fetch(`https://crudintask.herokuapp.com/customer/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteCustomer = (id) => {
  return fetch(`https://crudintask.herokuapp.com/customer/${id}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const createCustomer = (customer) => {
  return fetch(`https://crudintask.herokuapp.com/customer/`,{
    method:"POST",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer)
  })
  .then(response => {
    response.json()
  })
  .catch(
    err=>console.log(err)
  )

}

export const updateCustomer = (id,customer) => {
  return fetch(`https://crudintask.herokuapp.com/customer/update/${id}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type":'Application/json'
    },
    body: JSON.stringify(customer)

  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
