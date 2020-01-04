import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { GlobalOrders } from './globalOrders'


Meteor.methods({
  'activeTables.insert': function(tableNumber) {

//find if the tableNumber is inside the activeTables
  const tables = ActiveTables.find({"tableNumber" : tableNumber}).fetch()
    if (tables === undefined || tables.length == 0){
      console.log("table#: " + tableNumber + ' NOT found!')
      //if table number is not found, insert a new order number.
      //Find the lastest order Id in GlobalOrders
      //*for Meteor, we need to put query and options in variables.
      let newOrderId = 0
      const query = {} //get everything
      const options = {sort: {"orderId" : -1}, limit: 1} //sort _id descendingly. only get 1 item from the top
      const latestOrder = GlobalOrders.find(query, options).fetch() //this is the query

      //if there is nothing in GlobalOrders
      if (latestOrder.length == 0){
        newOrderId = 1
      }
      //fetch return an array. new order Id = lastest order id  + 1 
      if (latestOrder.length > 0){
        newOrderId = latestOrder[0].orderId
        newOrderId = newOrderId + 1
        console.log('!newOrderId' + newOrderId)
      }
      GlobalOrders.insert({"orderId" : newOrderId, tableNumber, "items":[]},
       function(err, objectId){
        console.log(objectId)
       })
      ActiveTables.insert({"orderId" : newOrderId, tableNumber})  
      console.log("New orderId: " + newOrderId)
      return newOrderId
    }
    else {
      console.log("table#: " + tableNumber + ' found!!!')
      console.log("current orderId: " + tables[0].orderId)
      const orderId = tables[0].orderId
      return orderId
    }
  }
})

export const ActiveTables =  new Mongo.Collection('activeTables')