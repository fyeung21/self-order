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
  Segment,
  Modal
} from "semantic-ui-react";
import "./styles.css";
import ItemOrderForm from '../ItemOrderForm/';


const OrderCard = ({ item , onDelete }) => {

  handleDelete = itemId => {
    // const items = this.state.items.filter(item => item.id !== itemId);
    // this.setState({ items: items });
    alert("Button clicked");
  };
  const [qty, setQty] = useState(0);
  const [visible, setVisible] = useState(true);
  const [thisItem, setthisItem] = useState(item)

  const [modalOpen, setModalOpen] = useState(false)
  const handleClose = () => { setModalOpen(false) }
  const handleOpen = () => { setModalOpen(true) }

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
              size="small"
              color="red"
              onClick={()=>{onDelete(item._id)}}
              //send a callback to the parent as a props 
              //because the delete function is located inside the parent
            >
            </Button>

            <Modal dimmer='blurring' open={modalOpen} trigger={
            <Button
              icon="edit"
              size="small"
              color="green"
              onClick={handleOpen}
            >
              {/* <Icon name="trash alternate outline" size="large" color="red" /> */}
            </Button>
            }>
              <ItemOrderForm 
                item={item} 
                modalOpen={handleClose} 
            />
            </Modal>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

export default OrderCard;
