import React, { useContext, useState } from "react";
// import "./styles.css";
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"


const OrderId = () => {
  return (
    <OrderIdContext.Consumer> 
        {({getOrderId})=>{
        return (
          <div>
            <p className="number">Table Number: {getOrderId}</p>
          </div>
        )
      }}
    </OrderIdContext.Consumer>
  )
}
export default OrderId;
