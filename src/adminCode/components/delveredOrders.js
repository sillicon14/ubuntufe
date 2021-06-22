import React, { useEffect, useState } from "react";
import "./orderList.css";
import axios from "axios";
import OrderList from "./orderList";

const Delvered = (props) => {
  var list;
  const [Order, setOrder] = useState([]);
  const [statusChange, setStatusChange] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders/orders/delvered")
      .then((response) => {
        setOrder(response.data);
      });
  }, [statusChange]);
  list = Order.map((a) => (
    <OrderList
      {...props}
      {...a}
      setStatusChange={setStatusChange}
      statusChange={statusChange}
    />
  ));
  return (
    <div>
      <div></div>
      <div></div>
      {list}
      {console.log(Order)}
    </div>
  );
};

export default Delvered;
