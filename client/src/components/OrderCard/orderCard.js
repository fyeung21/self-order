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
    <Card.Group>
      <Card className="card1">
        <Card.Content>
          <div className="content1">
            <Image
              className="image-card"
              // floated="right"
              // size="small"
              src="http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg"
            />
            <Card.Header>
              Dim-Sum bbq
              <Card.Meta>3 pcs</Card.Meta>
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
              <Button icon="trash alternate outline" size="large" color="red">
                {/* <Icon name="trash alternate outline" size="large" color="red" /> */}
              </Button>
            </div>
          </div>
        </Card.Content>
      </Card>
      <Card className="card1">
        <Card.Content>
          <div className="content1">
            <Image
              className="image-card"
              src="http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-steamed-pork-dumplings-thumb.jpg"
            />
            <Card.Header>
              Egg Custard
              <Card.Meta>4 pcs</Card.Meta>
            </Card.Header>
            <div>
              <Icon name="trash alternate outline" size="large" color="red" />
            </div>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default OrderCard;
