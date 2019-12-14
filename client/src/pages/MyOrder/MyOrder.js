import React, { Component } from "react";
import OrderCard from "../../components/OrderCard.js";

class MyOrder extends Component {
  render() {
    return (
      <div>
        <OrderCard />
        <p>this is the My Order page found at /my-order</p>
      </div>
    );
  }
}
export default MyOrder;
