import React, { Component, Fragment, useState } from "react";
import {
  Button,
  Icon,
  Card,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import "./styles.css";

const OrderCard = ({ item }) => {

  handleDelete = itemId => {
    // const items = this.state.items.filter(item => item.id !== itemId);
    // this.setState({ items: items });
    alert("Button clicked");
  };
  const [qty, setQty] = useState(0);
  const [visible, setVisible] = useState(true);
  const [thisItem, setthisItem] = useState(item)


  const handlePlusQty = () => {
    let counter = thisItem.qty
    counter = counter + 1
    setthisItem({...thisItem, "qty" : counter})
    // console.log(JSON.stringify(thisItem))
    // item.qty = item.qty
  }
  const handleMinusQty = () => {
    let counter = item.qty
    
    if(counter > 0) {
        counter--
        setthisItem(counter)
        // item.qty = qty
      }
    }

  // const OrderCard = () => {
  return (
    <Card fluid className="card1">
      <Card.Content>
        <div className="content1">
          <Image
            className="image-card"
            // floated="right"
            // size="small"
            src={item.imgurl}
          />
          <Card.Header className="header-my-order">
            {item.name}
            <Card.Header>/{item.pcs}pcs</Card.Header>
            <Card.Meta>Qty:{item.qty}</Card.Meta>
            <Card.Meta>Price: ${item.price * item.qty}</Card.Meta>
          </Card.Header>
          <div>
            <Button
              
              icon="trash"
              size="middle"
              color="red"
              onClick={this.handleDelete}
            >
              {/* <Icon name="trash alternate outline" size="large" color="red" /> */}
            </Button>
            <Button
              
              icon="edit"
              size="middle"
              color="green"
              onClick={this.handleDelete}
            >
              {/* <Icon name="trash alternate outline" size="large" color="red" /> */}
            </Button>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

export default OrderCard;
