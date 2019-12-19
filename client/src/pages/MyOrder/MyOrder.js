import React, { Component } from "react";
import OrderCard from "../../components/OrderCard";
import TableNumber from "../../components/TableNumber";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import "./styles.css";
import NavBar from "../../components/NavBar/NavBar";
const menuItems = require("../../pages/Menu/menu.json");

const MyOrder = () => {
  return (
    <div>
      <TableNumber />
      <Grid doubling columns={2} padded>
        {menuItems.map(item => (
          <OrderCard item={item} key={item.name} />
        ))}
      </Grid>
      <div className="total">
        <div>Qty: 2</div>
        <div>
          <p>Subtotal: $20.00</p>
          <p>tax: $0.80</p>
          <p>Total: $20.80</p>
        </div>
      </div>
      <div className="btns">
        <Button className="btn">Send To Kitchen</Button>
        <Button className="btn">Get My Bill</Button>
      </div>
      <NavBar />
    </div>
  );
};

export default MyOrder;
