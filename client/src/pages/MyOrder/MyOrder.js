import React from "react";
import OrderCard from "../../components/OrderCard";
import TableNumber from "../../components/TableNumber/TableNumber";
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
import { withTracker } from "meteor/react-meteor-data";
import { Menu } from "/imports/api/collections/menu";
const menuItems = require("../../pages/Menu/menu.json");

const MyOrder = ({ menu, ...props }) => {
  const item = [];

  handleButton = () => {
    // const items = this.state.items.filter(item => item.id !== itemId);
    // this.setState({ items: items });
    alert("Button clicked");
  };

  return (
    <div className="my-order">
      <TableNumber />
      <Grid doubling columns={2} padded>
        {menu.map(item => (
          <Grid.Column>
            <OrderCard item={item} key={item.name} />
          </Grid.Column>
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
        <Button className="btn" onClick={handleButton}>
          Send To Kitchen
        </Button>
        <Button className="btn" onClick={handleButton}>
          Get My Bill
        </Button>
      </div>
      <NavBar />
    </div>
  );
};

export default withTracker(() => {
  //subscribe the 'menu' collection from mongodb
  Meteor.subscribe("menu");
  const menu = Menu.find({}).fetch();

  return {
    //return an object
    menu
  };
})(MyOrder); //send the object to MyOrder as props
