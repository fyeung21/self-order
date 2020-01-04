import React , {useContext, useState, useEffect} from "react";
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
import { GlobalOrders } from '/imports/api/collections/globalOrders';
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { Session } from 'meteor/session'

//run this in terminal meteor add session

let orderId = null
let items = null

//currect
const MyOrder = ( {order} ) => {
  orderId = useContext(OrderIdContext).getOrderId
  Session.set('orderId', orderId) //session is for passing value to withTracker

  if (order[0]){
    items = order[0].items
    console.log("items!!!" + items)
}
  handleButton = () => {
    // const items = this.state.items.filter(item => item.id !== itemId);
    // this.setState({ items: items });
    alert("Button clicked");
  };

  const subTotal = () => {
    // console.log("@@" + JSON.stringify(currentOrder))
    if (items != null){
      let total = 0
      for ( let i in items){
        total = total + (items[i].price * items[i].qty)
        }
        return total
      }
    }

  return (
    <div className="my-order">
      <TableNumber />
      <p>
        {/* {JSON.stringify(currectOrder.items)} */}
        {/* {currectOrder.items} */}
      </p>
      <Grid doubling columns={2} padded>
        {(items !== null) ? items.map((item, index) => (
          <Grid.Column>
            <OrderCard item={item} key={index} />
          </Grid.Column>
        )) : <h2>Loading...</h2>}
      </Grid>

      <div className="total">
        <div>
          <p>Subtotal: ${subTotal()}</p>
          <p>GST(5%): ${subTotal()*100*0.05/100}</p>
          <p>Total: ${subTotal()*100*1.05/100}</p>
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
  //subscribe the 'globalOrders' collection from mongodb
  Meteor.subscribe('globalOrders')
  const id = parseInt(Session.get('orderId'))
  const order = GlobalOrders.find({'orderId': id}).fetch()
  // console.log(JSON.stringify(currectOrder))
  return { //return an object
    order
  }
})(MyOrder) //send the object to MenuConatiner as props