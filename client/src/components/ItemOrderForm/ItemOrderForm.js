
import React, {Fragment, useState, useContext, useEffect} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Header, Image, Modal, Icon} from 'semantic-ui-react'
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { GlobalOrders } from '/imports/api/collections/globalOrders';

import "./itemOrderStyle.css"

const ItemOrderForm = ({item, modalOpen}) => {

  const orderId = useContext(OrderIdContext).getOrderId
  const [thisItem, setthisItem] = useState(item)

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
    setthisItem({...thisItem, "qty" : counter})
  }
  const handleMinusQty = () => {
    let counter = thisItem.qty
    if(counter > 1) {
      counter = counter - 1
      setthisItem({...thisItem, "qty" : counter})
      }
    }
    let counter = 0
  //get Qty when component will mount
  useEffect(()=>{
    for (i = 0; i < 2; i++){
      counter = counter + 1
    }
    //find if the item is already added to cart. if so, add button will become edit button
    //if it is sent to the kitchen, the same item can be added again
    Meteor.call('globalOrders.checkCart', thisItem, orderId, (err, res) => {
      if (err) { 
        alert(err)
      } else {
        console.log(res)
        for (let i in res){
          for (let j in res[i].items){
            if (res[i].items[j].item_id && res[i].items[j].sentToKitchen == false){
              if (item._id == res[i].items[j]._id){
                console.log('HELLO'+ JSON.stringify(res[i].items[j] ))
              setthisItem(res[i].items[j])
            }
          } else {
            setthisItem(item)
          }
          }
        }
      }
    })

    // Meteor.call('globalOrders.getQty',  thisItem, orderId, (err, res) => {
    //   if (err) {
    //     alert(err)
    //   } else {
    //     console.log("getQty " + res)
    //     if (res == undefined){
    //       setthisItem({...thisItem, "qty" : 1})
    //     }
    //     else {
    //     setthisItem({...thisItem, "qty" : res})
    //   }
    //   }
    // })
  },[counter])

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
          <Header><h2>{item.name}</h2></Header>
          <p>
            {item.description}
          </p>
            {thisItem.item_id ? <p style={{color: "green", display: "block"}}>
              <Icon name="check circle" />This item has been added to shopping cart.</p> : null}
          <Header>${item.price} / <span className="pcs">{item.pcs}pcs</span></Header>
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
            <br/>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={modalOpen}>
          Close
        </Button>
        {thisItem.item_id? 
        <Button
          content="Edit item"
          color="blue"
          icon='edit'
          labelPosition='right'
          onClick={()=>{
            editItem()
            modalOpen()
          }
        }
        />
        :
        <Button
          content="Add to order"
          positive
          icon='checkmark'
          labelPosition='right'
          onClick={()=>{
            addItemToOrder()
            modalOpen()
          }
        }
        />
      }
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