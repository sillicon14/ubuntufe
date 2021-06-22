import React, { useEffect, useState } from "react";
import axios from "axios";
const Details = (props) => {
  const [link, setlink] = useState("");
  const [edit, setedit] = useState(false);
  const [order, setOrder] = useState([]);
  const [orderItems, setItems] = useState([]);
  const [address, setAddress] = useState([]);
  const [renderCause, setRenderCause] = useState(true);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/orders/rohith/1223/${props.match.params.id}`
        //`http://localhost:3000/api/orders/rohith/1223/60bd17ad0a1a7f2a785a6006`
      )
      .then((response) => {
        setOrder(response.data);
        setItems(response.data.orderItems);
        setAddress(response.data.shippingAddress);
      });
  }, [renderCause]);

  const submitHandle = async (evt) => {
    evt.preventDefault();
    await axios
      .put(`http://localhost:5000/api/orders/trackingLink/${order._id}/${link}`)
      .then((response) => {
        console.log(response);
        setedit(!edit);
        setRenderCause(!renderCause);
      });
  };
  return (
    <div style={{ background: "black", color: "white" }}>
      <h4>Order id: {props.match.params.id}</h4>
      <div>placed by:</div>
      <div
        className="orderList"
        style={{
          background: "rgb(239, 236, 241)",
          maxWidth: "50%",
          margin: "2% 0%",
          color: "black",
        }}
      >
        <center style={{ fontWeight: "700", textAlign: "center" }}>
          Orderd products list
        </center>
        {orderItems.map((item) => {
          return (
            <div style={{ borderBottom: "2px solid black" }}>
              <span style={{ display: "list-item" }}>
                Product Name:{" "}
                <span style={{ fontWeight: "900" }}>{item.name}</span>
              </span>
              <span style={{ display: "list-item" }}>
                qty: <span style={{ fontWeight: "900" }}>{item.qty}</span>
              </span>
              <span style={{ display: "list-item" }}>
                price: <span style={{ fountWeight: "900" }}>{item.price}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div>status of order : {order.orderStatus}</div>
      <div>transaction id:{order.transactionId}</div>
      <div>Shipping Adress:{address.address}</div>
      <div>City:{address.city}</div>
      <div>Postal Code:{address.postalCode}</div>
      <div>Billing Adress:</div>
      {order.trackingLink && (
        <div>
          tracking link : {order.trackingLink || "none"}
          <button
            onClick={() => setedit(!edit)}
            hidden={
              order.orderStatus == "delvered" || order.orderStatus == "canceled"
                ? true
                : false
            }
          >
            Edit
          </button>
        </div>
      )}
      {order.orderStatus != "ordered" &&
        !order.orderStatus == "canceled" &&
        (!order.trackingLink || edit) && (
          <form onSubmit={(evt) => submitHandle(evt)}>
            <label htmlFor="trackingLink">Add a tracking link:</label>
            <input
              id="trackingLink"
              type="text"
              onChange={(evt) => setlink([evt.target.value])}
              value={link}
            />
            <button type="submit" style={{ padding: "4px" }}>
              submit
            </button>
          </form>
        )}
    </div>
  );
};

export default Details;
