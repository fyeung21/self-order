import React , {Fragment, useContext, useState, useEffect} from "react";
import OrderCard from "../../components/OrderCard";
import TableNumber from "../../components/TableNumber/TableNumber";
import {
  Button,
  Item,
  Grid,
  Icon,
  Modal,
  Message,
  Segment
} from "semantic-ui-react";
import "./styles.css";
import NavBar from "../../components/NavBar/NavBar";
import { withTracker } from "meteor/react-meteor-data";
import { Menu } from "/imports/api/collections/menu";
const menuItems = require("../../pages/Menu/menu.json");
import { GlobalOrders } from '/imports/api/collections/globalOrders';
import { Kitchen } from '/imports/api/collections/kitchen';
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { TableContext } from "../../contexts/TableContextProvider"
import { Session } from 'meteor/session'

//run this in terminal meteor add session

let orderId = null
let items = null

//currect
const MyOrder = ( {order} ) => {
  orderId = useContext(OrderIdContext).getOrderId
  const tableNumber = useContext(TableContext).getTableNumber
  Session.set('orderId', orderId) //session is for passing value to withTracker
  const [payModal, setPayModal] = useState(false)
  // *** Rearrange and group all the items by order time ***
  // 1 .create an array with all the orderTimes, then remove diplicate ones.
  let timesArr = []
  let groupedItemsByDate = []
  let sameTimedItems = []

  if (order[0]){
    items = order[0].items
    items.map((item)=>{
      timesArr.unshift(item.orderTime)
    })
    timesArr = [...new Set(timesArr)];//remove all duplicates
  }
  //  2. put items in a new array as the example below:
  //  [ {time : 'date string',
  //   {sameTimedItems: [array of items]} ]  
    timesArr.map(time => {
      sameTimedItems = []
      items.map(item => {
        if (item.orderTime === time){
          sameTimedItems.push(item)
      }
    })
    { time } //time.time = time
    groupedItemsByDate.push({time, sameTimedItems})
  })

  const onSendToKitchen = () => {
    Meteor.call('globalOrders.insertTimestamps', orderId) 
  }

  const onDelete = ( item_id ) => {
    Meteor.call('globalOrders.deleteItems', item_id, orderId)
  }

  const requestBill = ( msg ) => {
    Meteor.call('globalOrders.requestBill', orderId, msg)
  }

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
    const timeFormat = (time) => {
      console.log(time)
      d = new Date(time)
      return d.toLocaleTimeString()
    }

    const onPay = () => {
      console.log('del cookie')
      document.cookie = "orderId=null; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
      document.cookie = "tableNumber=null; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
      setPayModal(true)
    }

    const closePayModal = () =>{
      setPayModal(false)
    }
  return (
    <div className="my-order">
      <Grid>
        <Grid.Column floated='left' width={5}>
          <TableNumber />
        </Grid.Column>
        <Grid.Column floated='right' width={7}>
          <p>Subtotal: ${subTotal()}</p>
        </Grid.Column>
      </Grid>
      {groupedItemsByDate.map((timedItems, index) => {
        return (
          <Fragment>
            <Grid>

            <Grid.Column className="dateTitle" floated='left' width={5}>
            {timedItems.time ?
              <h3>Ordered at {timeFormat(timedItems.time)}</h3> 
              :
              <h3 className="date">New Items:</h3> 
            }
            </Grid.Column>

            <Grid.Column floated='right' width={7}>
            {(!timedItems.time)?
                <Button icon positive onClick={onSendToKitchen}>
                    <Icon name="utensils"/> Send To Kitchen
                </Button> 
                :
                null
            }
            {order[0].requestBill === 'Paid' ? 
               <h3 style={{color: "green"}}>Paid, Thank you :)</h3> :
            (timedItems.time && index === 0)?

              <Modal size="tiny" closeIcon trigger={
                <Button icon color="blue" onClick={()=>{requestBill('Bill requested')}}>
                  <Icon name="dollar"/>Request the Bill
                </Button>
              }>
                <br></br>
                <Modal.Header>Receipt for Table#: {tableNumber}</Modal.Header>
                <Modal.Content>
                {groupedItemsByDate.map((timedItems, index) => (
                  <Fragment>
                    {timedItems.sameTimedItems.map(item => (
                      <Fragment>
                        <Grid>
                          <Grid.Column width={3}>
                            {item.qty} x 
                          </Grid.Column>
                          <Grid.Column width={9}>
                            {item.name}
                          </Grid.Column>
                          <Grid.Column textAlign='right' floated='right' width={4}>
                            ${(item.price * item.qty).toFixed(2)}
                          </Grid.Column>
                        </Grid>
                      </Fragment>
                    ))}
                  </Fragment>
                ))}
                <br></br>
                <hr />
                <Grid>
                  <Grid.Column textAlign='right' floated='right' width={10}>
                    <p>Subtotal:</p>
                    <p>GST(5%):</p>
                    <h3>Total:</h3>
                  </Grid.Column>
                  <Grid.Column textAlign='right' floated='right' width={6}>
                    <p>${subTotal()}</p>
                    <p>${subTotal()*100*0.05/100}</p>
                    <h3>${subTotal()*100*1.05/100}</h3>
                  </Grid.Column>
                </Grid>
                <br></br>

                <Grid textAlign='center' >
                    <Grid.Column>
                      {order[0].requestBill === "Paid" ? 
                      <h3 style={{color: "green"}}>Paid, Thank you :)</h3> :
                        <Button positive onClick={()=>{
                          requestBill('Paid')
                          onPay()}}>
                          Make your payment
                        </Button>
                      }
                      <Modal open={payModal} size="mini">
                          <Modal.Header>
                            Thank you
                          </Modal.Header>
                          <Modal.Content>
                          Your payment has been made. Please come again!
                          </Modal.Content>
                          <Modal.Actions>
                          <Button onClick={closePayModal}>OK</Button>
                          </Modal.Actions>
                        </Modal>
                    </Grid.Column>
                  </Grid>
                <Grid>
                  <Grid.Column textAlign='center'>
                    Thank you for visiting. Please come again!
                  </Grid.Column>
                </Grid>
                </Modal.Content>
              </Modal>
              
                :
                null
            }
            
            </Grid.Column>

          </Grid>
          <hr />
            <Grid stackable doubling columns={3}>
              {(items !== null) ? timedItems.sameTimedItems.map((item, index) => (
                <Grid.Column>
                  <Item.Group divided unstackable>
                    <OrderCard item={item} key={index} onDelete={onDelete}/>
                  </Item.Group>
                </Grid.Column>
              )) : <h2>Loading...</h2>}
            </Grid>
          </Fragment>
      )})}
      <NavBar order={order}/>
    </div>
  );
};


export default withTracker(() => {
  //subscribe the 'globalOrders' collection from mongodb
  Meteor.subscribe('globalOrders')
  // Meteor.subscribe('kitchen')
  const id = parseInt(Session.get('orderId'))
  const order = GlobalOrders.find({'orderId': id}).fetch()
  // console.log(JSON.stringify(currectOrder))
  return { //return an object
    order
  }
})(MyOrder) //send the object as props