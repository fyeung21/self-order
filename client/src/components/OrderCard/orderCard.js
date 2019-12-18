import React, { Component } from "react";
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

const OrderCard = () => {
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
            </Card.Header>
            <div>
              <Icon name="trash alternate outline" size="large" color="red" />
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
