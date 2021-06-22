import React from "react";
import axios from "axios";
import New from "./logos/new.png";
import Seen from "./logos/seen.png";

function OrderList(props) {
  const detailsHandle = () => {
    props.history.push(`Detals/Orderdetails/${props._id}`);
  };
  const buttonHndle = async (status) => {
    await axios.put(
      `http://localhost:5000/api/orders/changeOrderStatus/${props._id}/${status}`
    );
    props.setStatusChange(!props.statusChange);
  };
  return (
    <div>
      <div className="admin-orderlist">
        <h4 className="admin-orderid">Order Id : {props._id}</h4>
        <hr />
        <div className="admin-button-row">
          <button
            className="admin-packed"
            hidden={
              props.orderStatus == "packed" ||
              props.orderStatus == "canceled" ||
              props.orderStatus == "delvered"
                ? true
                : false
            }
            style={{ border: "2px solid green", color: "green" }}
            onClick={() => buttonHndle("packed")}
          >
            packed
          </button>
          <button
            className="admin-button"
            style={{ border: "2px solid blue", color: "blue" }}
            onClick={() => buttonHndle("delvered")}
            hidden={
              props.orderStatus == "delvered" || props.orderStatus == "canceled"
                ? true
                : false
            }
          >
            deleverde
          </button>
          <button
            style={{ border: "2px solid Black" }}
            onClick={detailsHandle}
            className="admin-button"
          >
            Details
          </button>
          <span className="admin-total-price">
            Total Price: {props.totalPrice || "0"}
          </span>
          <span className="admin-newStatus">
            {props.newStatus == "new" && (
              <img src={New} style={{ maxWidth: "30px" }} />
            )}
            {props.newStatus == "seen" && (
              <img src={Seen} style={{ maxWidth: "30px" }} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
