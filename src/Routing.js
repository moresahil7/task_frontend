import React from "react";
import App from "./App";
import Details from "./components/Details";
import Create from "./components/Create";
import Update from "./components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customer/:_id" element={<Details />} />
        <Route path="/create/customer" element={<Create />} />
        <Route path="/update/:_id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
