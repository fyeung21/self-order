import React, { Component } from "react";
import OrderCard from "../../components/OrderCard";
import tableNumber from "../../components/tableNumber";
import styles from "./styles";
import { Button } from "semantic-ui-react";

class MyOrder extends Component {
  render() {
    return (
      <div>
        <tableNumber />
        <OrderCard />
        <div className="total">
          <div>Qty: 2</div>
          <div>
            <p>Subtotal: $20.00</p>
            <p>tax: $0.80</p>
            <p>Total: $20.80</p>
          </div>
        </div>
        <div className="btns">
          <Button>Send To Kitchen</Button>
          <Button>Get My Bill</Button>
        </div>
      </div>
    );
  }
}
export default MyOrder;
