import React , {Fragment, useContext, useState, useEffect} from "react";
import OrderCard from "../../components/OrderCard";
import TableNumber from "../../components/TableNumber/TableNumber";
import {
  Button,
  Item,
  Grid,
  Icon,
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
import { Kitchen } from '/imports/api/collections/kitchen';
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { Session } from 'meteor/session'

//run this in terminal meteor add session

let orderId = null
let items = null

//currect
const MyOrder = ( {order} ) => {
  orderId = useContext(OrderIdContext).getOrderId
  Session.set('orderId', orderId) //session is for passing value to withTracker

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
      console.log(time)
      sameTimedItems = []
      items.map(item => {
        console.log(item.orderTime)
        if (item.orderTime === time){
          console.log(9)
          sameTimedItems.push(item)
      }
    })
    { time } //time.time = time
    groupedItemsByDate.push({time, sameTimedItems})
  })
  console.log(groupedItemsByDate)

  const onSendToKitchen = () => {
    Meteor.call('globalOrders.insertTimestamps', orderId) 
  }

  const onDelete = ( item_id ) => {
    Meteor.call('globalOrders.deleteItems', item_id, orderId)
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
              <h3>Ordered on {timeFormat(timedItems.time)}</h3> 
              :
              <h3 className="date">New Items:</h3> 
            }
            </Grid.Column>

            <Grid.Column floated='right' width={7}>
            {(!timedItems.time && index == 0)?
                <Button icon positive onClick={onSendToKitchen}>
                    <Icon name="utensils"/> Send To Kitchen
                </Button> 
                :
                null
            }
            {(timedItems.time && index === 0)?
                <Button icon color="blue">
                  <Icon name="dollar"/>Request the Bill
                </Button>
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

      <div className="total">
        <div>
          <p>Subtotal: ${subTotal()}</p>
          <p>GST(5%): ${subTotal()*100*0.05/100}</p>
          <p>Total: ${subTotal()*100*1.05/100}</p>
        </div>
      </div>
      <div className="btns">
        <Button className="btn" onClick={onSendToKitchen}>
          Send To Kitchen
        </Button>
        <Button className="btn">
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
  // Meteor.subscribe('kitchen')
  const id = parseInt(Session.get('orderId'))
  const order = GlobalOrders.find({'orderId': id}).fetch()
  // console.log(JSON.stringify(currectOrder))
  return { //return an object
    order
  }
})(MyOrder) //send the object as props