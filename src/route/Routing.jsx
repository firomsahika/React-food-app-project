import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Menu from "../pages/MenuPage/Menu";
import Service from "../pages/Services/Service";
import Delivery from "../pages/DeliveryPage/Delivery";
import Header from "../components/Header/Header";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/menu" Component={Menu} />
        <Route path="/service" Component={Service} />
        <Route path="/delivery" Component={Delivery} />
      </Routes>
    </div>
  );
};

export default Routing;
