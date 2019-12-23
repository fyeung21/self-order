import React, { Fragment, useContext, useState } from "react";
import "./styles.css";
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"


const OrderId = () => {
  return (
    <OrderIdContext.Consumer> 
        {({getOrderId})=>{
        return (
          <Fragment>
            Order Id: {getOrderId}
          </Fragment>
        )
      }}
    </OrderIdContext.Consumer>
  )
}
export default OrderId;
