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
  state = {
    items: [
      {
        name: "1111Shrimp Dumplings",
        price: 7,
        pcs: 4,
        description: "Whole shrimp in a translucent wrapper.",
        cataglory: " Steamed",
        imgurl:
          "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
        featured: false
      }
    ]
  };

  handleDelete = itemId => {
    // const items = this.state.items.filter(item => item.id !== itemId);
    // this.setState({ items: items });
    alert("Button clicked");
  };
  const [qty, setQty] = useState(0);
  const [visible, setVisible] = useState(true);

  const handlePlusQty = () => {
    let counter = qty;
    counter++;
    setQty(counter);
  };
  const handleMinusQty = () => {
    let counter = qty;

    if (counter > 0) {
      counter--;
      setQty(counter);
    }
  };

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
            <Card.Header>3 pcs</Card.Header>
            <Card.Meta>Qty:{qty}</Card.Meta>
            <div className="qty2">
              <div>
                <Button
                  circular
                  icon="minus"
                  onClick={handleMinusQty}
                  className="add-btn"
                />
              </div>
              <h2 className="qtyNum1">{qty}</h2>
              <div>
                <Button
                  circular
                  icon="plus"
                  onClick={handlePlusQty}
                  className="add-btn"
                />
              </div>
            </div>
          </Card.Header>
          <div>
            <Button
              basic
              icon="trash alternate outline"
              size="large"
              color="red"
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
