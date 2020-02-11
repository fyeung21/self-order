
import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Header, Image, Modal, Icon, Grid } from 'semantic-ui-react'
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { GlobalOrders } from '/imports/api/collections/globalOrders';

import "./itemOrderStyle.css"

const ItemOrderForm = ({ item, modalOpen }) => {

  const orderId = useContext(OrderIdContext).getOrderId
  const [thisItem, setthisItem] = useState(item)
  const [addModal, setAddModal] = useState(false)

  const openAddModel = () => {

  }

  const addItemToOrder = () => {
    Meteor.call('globalOrders.insertItem', thisItem, orderId, (err, res) => {
      if (err) {
        alert(err)
      } else {
        // success!
      }
    })
  }

  const editItem = () => {
    Meteor.call('globalOrders.editItem', thisItem, orderId, (err, res) => {
      if (err) {
        alert(err)
      } else {
        // success!
      }
    })
  }

  const handlePlusQty = () => {
    let counter = thisItem.qty
    counter = counter + 1
    setthisItem({ ...thisItem, "qty": counter })
  }
  const handleMinusQty = () => {
    let counter = thisItem.qty
    if (counter > 1) {
      counter = counter - 1
      setthisItem({ ...thisItem, "qty": counter })
    }
  }
  let counter = 0
  //get Qty when component will mount
  useEffect(() => {
    for (i = 0; i < 2; i++) {
      counter = counter + 1
    }
    //find if the item is already added to cart. if so, add button will become edit button
    //if it is sent to the kitchen, the same item can be added again
    Meteor.call('globalOrders.checkCart', thisItem, orderId, (err, res) => {
      if (err) {
        alert(err)
      } else {
        console.log(res)
        for (let i in res) {
          for (let j in res[i].items) {
            if (res[i].items[j].item_id && res[i].items[j].sentToKitchen == false) {
              if (item._id == res[i].items[j]._id) {
                setthisItem(res[i].items[j])
              }
            } else {
              setthisItem(item)
            }
          }
        }
      }
    })
  }, [counter])

  return (
    <Fragment>
      <Modal.Header>Add to order</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size='medium'
          src={item.imgurl}
        />
        <Modal.Description>
          {item.nameChi == "" ? null : <Header><h2>{item.nameChi}</h2></Header>}
          <Header className="title"><h2>{item.nameEng}</h2></Header>
          {item.description == null ? null : <p> {item.description} </p>}
          {item.price == 0 ? <p>{item.pcs}pc(s) / order</p>
            : <Header>${item.price} / <span className="pcs">{item.pcs}pcs</span></Header>}
          {thisItem.item_id ? <p style={{ color: "green", display: "block" }}>
            <Icon name="check circle" />This item has been added to shopping cart. You can change quantity.</p> : null}
          <div className="qty">
            <div>
              <Button circular icon='minus' onClick={handleMinusQty} />
            </div>
            <h2 className="qtyNum">
              {thisItem.qty}
            </h2>
            <div>
              <Button circular icon='plus' onClick={handlePlusQty} />
            </div>
          </div>
          
        </Modal.Description>
        </Modal.Content>
          <Modal.Actions>
              {thisItem.item_id ?
                <Button
                  content="Edit Qty"
                  color="blue"
                  icon='edit'
                  onClick={() => {
                    editItem()
                    modalOpen()
                  }
                  }
                />
                :
                <Modal
                  // open={open}
                  // onOpen={this.open}
                  // onClose={this.close}
                  size='small'
                  trigger={
                    <Button
                      content="Add to cart"
                      color="green"
                      icon='edit'
                         onClick={() => {
                        addItemToOrder()
                        }
                      }
                    /> 
                  }
                >
                  <Modal.Header>{item.nameEng} has been added to cart!</Modal.Header>
                  <Modal.Content>
                    <p>When ready, please go to my order and click "SEND TO KITCHEN". Then, your order will be processed. </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button icon='check' color="green" content='Got it' 
                      onClick={()=> {
                        modalOpen()
                      }}/>
                  </Modal.Actions>
                </Modal>
                }
              <Button content="Close" color='black' icon="close" onClick={modalOpen} />
          </Modal.Actions>    
    </Fragment>
  )
}

//withTracker tacks changes in database
export default withTracker(() => {
  //subscribe the 'globalOrders' collection from mongodb
  Meteor.subscribe('globalOrders')
  const globalOrders = GlobalOrders.find().fetch()
  return { //return an object
    globalOrders
  }
})(ItemOrderForm) //send the object to MenuConatiner as props