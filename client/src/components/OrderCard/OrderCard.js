import React, { Component, Fragment, useState } from "react";
import { Button, Item, Card, Modal, Label, Icon }  from 'semantic-ui-react'
// import "./styles.css";
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
   const EditButton = () => {
     return (
      <div>
      <Button
        icon="trash"
        size="small"
        color="red"
        onClick={()=>{onDelete(item.item_id)}}
        //send a callback to the parent as a props 
        //because the delete function is located inside the parent
      >
      </Button>

      <Modal dimmer='blurring' open={modalOpen} trigger={
      <Button
        icon="edit"
        size="small"
        color="blue"
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
     )
   }

   return (
     <Fragment>
          <Item>
            <Item.Image size="small" src={item.imgurl} />
            <Item.Content>
              <Item.Header>{item.nameEng}</Item.Header>
              {item.nameChi == "" ? null : <Item.Header>{item.nameChi}</Item.Header>}
              <Item.Meta>
                {item.price == 0 ? null : <span className='cinema'>${item.price} / {item.pcs}pcs</span>}
              </Item.Meta>
              <Item.Description>qty: {item.qty}</Item.Description>
                {item.orderTime?
                  <Item.Description>status: {item.status}</Item.Description> :
                    <Item.Extra>
                      <EditButton />
                    </Item.Extra>
                }
            </Item.Content>
          </Item>
        </Fragment>
  );
};

export default OrderCard;
