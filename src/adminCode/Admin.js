import "./AdminStyle.css";
import React from "react";
import Nav1 from "./header/nav";
import { Route, Switch } from "react-router-dom";
import Packed from "./components/packedOrders";
import Details from "./components/orderDetails";
import Orders from "./components/newOrders";
import Delvered from "./components/delveredOrders";
import AddItem from "./components/addItems";
import CancelledOrder from "./components/canceledOrders";

function Admin() {
  return (
    <div className="Admin">
      <Nav1 />
      <div className="main">
        <Switch>
          <Route
            path="/"
            render={(routerProps) => <Orders {...routerProps} />}
            exact
          />
          <Route
            path="/Detals/Orderdetails/:id"
            render={(routerProps) => <Details {...routerProps}></Details>}
          />
          <Route
            path="/packed"
            render={(routerProps) => <Packed {...routerProps} />}
          />
          <Route
            path="/Delvered"
            render={(routerProps) => <Delvered {...routerProps} />}
          />
          <Route
            path="/add"
            render={(routerProps) => <AddItem {...routerProps} />}
          />
          <Route
            path="/cancelledOrder"
            render={(routerProps) => <CancelledOrder {...routerProps} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
